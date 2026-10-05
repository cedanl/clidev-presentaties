# Genereert de synthetische workshopdata op basis van de generator uit staat1cho.
#
# Waarom een eigen stap: maak_synthetische_1cho() trekt uitval en wissel voor ALLE studenten
# met dezelfde kans, dus per sector is er niets te vinden (zie workshop-rad/docs/bevindingen-staat1cho.md).
# Voor de workshop willen we een zichtbaar patroon: we draaien de generator per sector met een
# eigen kans op uitval en studiewissel en houden alleen de studenten die in die sector starten.
#
# Gebruik (vanuit de root van clidev-presentaties):
#   Rscript workshop-rad/scripts/genereer_data.R [pad/naar/staat-van-onderwijsinstelling]
# Schrijft workshop-rad/data/synthetisch_1cho.csv (voor deelnemers) en
# workshop-rad/data/waarheid.csv (antwoordsleutel, NIET delen met deelnemers).
suppressMessages({library(dplyr); library(readr)})
args <- commandArgs(trailingOnly = TRUE)
pad <- if (length(args)) args[1] else "../staat-van-onderwijsinstelling"
suppressMessages(pkgload::load_all(pad, quiet = TRUE))

# Het ingebakken patroon: kans op uitval na jaar 1 en op studiewissel, per startsector
patroon <- tibble::tribble(
  ~sector,           ~p_uitval_1jr, ~p_wissel, ~prefix, ~seed,
  "techniek",        0.22,          0.05,      "1",     11L,
  "gezondheidszorg", 0.10,          0.20,      "2",     12L,
  "economie",        0.15,          0.12,      "3",     13L
)

lijst <- lapply(seq_len(nrow(patroon)), function(i) {
  p <- patroon[i, ]
  s <- maak_synthetische_1cho(n_per_jaar = 250L, jaren = 2012:2023,
                              p_uitval_1jr = p$p_uitval_1jr, p_uitval_later = 0.10,
                              p_wissel = p$p_wissel, seed = p$seed)
  w <- attr(s, "waarheid")
  start <- s |> arrange(persoonsgebonden_nummer, inschrijvingsjaar) |>
    group_by(persoonsgebonden_nummer) |> slice(1) |> ungroup()
  houd <- start$persoonsgebonden_nummer[start$croho_onderdeel_actuele_opleiding == p$sector]
  nieuw_id <- function(x) paste0(p$prefix, substr(x, 2, 9))
  list(
    data = s |> filter(persoonsgebonden_nummer %in% houd) |>
      mutate(persoonsgebonden_nummer = nieuw_id(persoonsgebonden_nummer)),
    waarheid = w |> filter(persoonsgebonden_nummer %in% houd) |>
      mutate(persoonsgebonden_nummer = nieuw_id(persoonsgebonden_nummer), start_sector = p$sector)
  )
})
data <- bind_rows(lapply(lijst, `[[`, "data"))
waarheid <- bind_rows(lapply(lijst, `[[`, "waarheid"))

write_delim(data, "workshop-rad/data/synthetisch_1cho.csv", delim = ";", na = "")
write_delim(waarheid, "workshop-rad/data/waarheid.csv", delim = ";", na = "")
cat("rijen:", nrow(data), " studenten:", nrow(waarheid), "\n")
