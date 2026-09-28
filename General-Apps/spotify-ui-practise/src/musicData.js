function timedLyrics(lines, duration) {
  return Array.from({ length: Math.ceil(duration / 2) }, (_, index) => ({
    start: index * 2,
    end: Math.min((index + 1) * 2, duration),
    text: lines[index % lines.length],
  }));
}

export const songs = [
  {
    imgUrl: "/album-cover.jpg",
    title: "After Hours",
    subtitle: "The Weeknd",
    duration: 236,
    lyrics: timedLyrics(
      [
        "Midnight hangs above the avenue",
        "Neon rain is painting every view",
        "I can hear the city breathe",
        "Every shadow moves with me",
        "Keep the windows open wide",
        "Let the blue lights flood inside",
        "All the noise is fading slow",
        "Where the quiet rivers flow",
        "Hold this moment in your hand",
        "Like a spark across the sand",
        "When the morning finds the street",
        "We will meet it on our feet",
      ],
      236,
    ),
  },
  {
    imgUrl: "/album-cover2.jpg",
    title: "Blinding Lights",
    subtitle: "The Weeknd",
    duration: 200,
    lyrics: timedLyrics(
      [
        "The room is glowing after dark",
        "A hundred windows make a spark",
        "Every corner knows my name",
        "Nothing here will stay the same",
        "Turn the speakers up a little",
        "Let the rhythm fill the middle",
        "Take a breath and count to four",
        "Leave the daylight at the door",
        "Every color starts to bend",
        "This is where the night begins",
        "I can see the way ahead",
        "Following the silver thread",
      ],
      200,
    ),
  },
  {
    imgUrl: "/album-cover3.jpg",
    title: "Save Your Tears",
    subtitle: "The Weeknd",
    duration: 215,
    lyrics: timedLyrics(
      [
        "Paper lanterns line the road",
        "Carrying a softer code",
        "Every step becomes a sound",
        "Echoing across the ground",
        "If you need a place to land",
        "There is space beside my hand",
        "Let the heavy weather pass",
        "Watch it disappear like glass",
        "Tomorrow waits beyond the blue",
        "With an open door for you",
        "Every promise starts anew",
        "When the sky comes back in view",
      ],
      215,
    ),
  },
];
