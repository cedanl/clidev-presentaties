# Video script: three 20-second clips for the EDUdata Pecha Kucha

Paste everything below the line into an LLM or agent that can drive a browser (for example one using the `demo-video` skill, which records the local app with headless Playwright and cuts it with FFmpeg).

---

## Task

Record three silent screen-recording clips of the EDUdata app answering one real question. Each clip is exactly 20.0 seconds long. They play back to back on three Pecha Kucha slides, so clip 2 must start where clip 1 ended, and clip 3 where clip 2 ended. In effect it is one 60-second recording cut into three equal parts.

The audience is mostly education directors and some policy workers. They do not know the tool. They must be able to see in 20 seconds per clip what is happening, without sound.

## The one rule that matters

Show the real app with its real output. Do not generate, mock up or edit the answer, the numbers or the chart. If you cannot get a correct answer, change the question and tell me. A fabricated answer shown to directors as real is worse than no video.

Before recording, do a dry run. Read the answer and check that:
- the data is actually about first-year enrolment (not graduates or total enrolment),
- the sources named in the answer are real and match the figures,
- the answer is not empty or an error.

If the dry run fails, stop and report what went wrong instead of recording.

## The question to ask

Ask it in English, typed into the chat box:

> How has first-year enrolment in business programmes at universities of applied sciences developed over the last five years, and how does my institution compare with similar institutions?

If the app cannot answer the second half (institution comparison), use this fallback and tell me you did:

> How has first-year enrolment in business programmes at universities of applied sciences developed over the last five years, per institution?

## Technical settings

- 16:9, 1920×1080, browser zoom around 125% so text stays readable on a projector.
- Light theme, no browser toolbars or bookmarks bar, no other tabs visible, no notifications.
- Show a visible mouse cursor. Move it smoothly, not instantly.
- No audio track at all.
- Use a test or demo account. Never show a password, API key, email address or the account name in the frame. Crop or blur the user menu if needed.
- If the answer streams slowly, speed up the waiting parts (up to 8×) but never speed up typing or the final result, so it still looks natural.
- Export H.264 MP4, 30 fps, no audio, faststart.

## Clip 1: "Ask" (0:00–0:20)

What happens:
1. 0–2 s: The empty chat is on screen. Hold still.
2. 2–14 s: The question is typed into the chat box at a calm human speed. Do not paste it.
3. 14–16 s: Hold on the finished question.
4. 16–17 s: Click the send button.
5. 17–20 s: The first reply begins to appear. Cut here.

Caption, bottom left, large, white text on a dark rounded box, visible the whole clip:
**1 · Ask in your own words**

## Clip 2: "Find" (0:20–0:40)

What happens:
1. The app shows its working steps: searching the catalogue, choosing a source, loading the dataset. Show these steps appearing one by one.
2. Where the steps name a source (CBS, DUO or RIO), briefly circle or highlight that name with a soft orange outline for about 2 seconds. Do not alter the text.
3. Speed up any long waits so the whole step sequence fits in 20 seconds.
4. End on the moment the figures are retrieved, just before the chart appears.

Caption, same style:
**2 · It finds the right source**

## Clip 3: "Show" (0:40–1:00)

What happens:
1. The chart or dashboard appears. Let it settle for 2 seconds.
2. Move the cursor over the chart so a tooltip shows on one data point.
3. Scroll down slowly to the part of the answer that names the sources and any caveats. Hold there for 3 seconds so the source names are readable.
4. The last 3 seconds are a still hold on the final frame, with nothing moving.

Caption, same style:
**3 · A checkable answer**

## Output

Save three files:
- `public/videos/edudata_1_ask.mp4`
- `public/videos/edudata_2_find.mp4`
- `public/videos/edudata_3_show.mp4`

Check each file is 20.0 seconds (±0.2 s) with `ffprobe`, has no audio stream, and plays on its own. Then send me a contact sheet of 4 frames per clip and tell me: which question you actually asked, whether you used the fallback, and which sources the answer named.

---

## Notes for me, not for the LLM

- Do not use a text-to-video model for this. It would invent the interface and the figures.
- The app UI and answers may come out partly in Dutch. That is fine and honest for a Dutch tool, but tell the audience in the notes of slide 6.
- Once the three files exist, I replace slides 6–8 with `<SlidevVideo autoplay>` clips so each starts when its slide appears.
