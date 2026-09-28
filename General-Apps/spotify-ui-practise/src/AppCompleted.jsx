import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  Ellipsis,
  Heart,
  Pause,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { songs } from "./musicData";

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, "0");

  return `${minutes}:${seconds}`;
}

function App() {
  const [position, setPosition] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const lyricRefs = useRef([]);
  const lyricContainerRef = useRef(null);
  const previousSongIndexRef = useRef(songIndex);

  const song = songs[songIndex];
  const lyricPosition = Math.min(position, song.duration - 1);
  const activeLyricIndex = song.lyrics.findIndex(
    (lyric) => lyricPosition >= lyric.start && lyricPosition < lyric.end,
  );

  const changeSong = useCallback((nextIndex) => {
    setSongIndex((nextIndex + songs.length) % songs.length);
    setPosition(0);
  }, []);

  const nextSong = useCallback(() => {
    if (isShuffled) {
      changeSong(Math.floor(Math.random() * songs.length));
      return;
    }

    changeSong(songIndex + 1);
  }, [changeSong, isShuffled, songIndex]);

  // Update the position every second when the song is playing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setTimeout(() => {
      if (position >= song.duration - 1) {
        if (isRepeating) {
          setPosition(0);
        } else {
          nextSong();
        }
        return;
      }

      setPosition(position + 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isPlaying, isRepeating, nextSong, position, song.duration]);

  // Scroll the active lyric into view when it changes
  useEffect(() => {
    const activeLyric = lyricRefs.current[activeLyricIndex];
    const lyricContainer = lyricContainerRef.current;

    if (!activeLyric || !lyricContainer) return;

    const lyricBounds = activeLyric.getBoundingClientRect();
    const containerBounds = lyricContainer.getBoundingClientRect();
    const songChanged = previousSongIndexRef.current !== songIndex;
    previousSongIndexRef.current = songIndex;

    lyricContainer.scrollTo({
      top:
        lyricContainer.scrollTop +
        lyricBounds.top -
        containerBounds.top -
        (lyricContainer.clientHeight - lyricBounds.height) / 2,
      behavior: songChanged ? "auto" : "smooth",
    });
  }, [activeLyricIndex, songIndex]);

  return (
    <div className="h-dvh bg-black font-sans text-white">
      <div className="mx-auto h-full max-w-sm overflow-y-auto rounded-3xl bg-[#07172f] px-6 pb-5 pt-6 no-scrollbar">
        <header className="flex items-center justify-between text-sm font-semibold">
          <button>
            <ChevronLeft />
          </button>
          <p className="tracking-wide">NOW PLAYING</p>
          <button>
            <Ellipsis />
          </button>
        </header>

        <main className="pt-5">
          <img
            className="mx-auto aspect-square w-[30vh] max-w-full rounded-2xl object-cover shadow-2xl shadow-black/60"
            src={song.imgUrl}
          />

          <section className="pt-5">
            <div className="flex items-center justify-between gap-5">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  {song.title}
                </h1>
                <p className="pt-1 text-base text-white/60">{song.subtitle}</p>
              </div>
              <button
                className={isLiked ? "text-[#2f7df6]" : "text-white"}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={isLiked ? "fill-current" : ""} />
              </button>
            </div>

            <input
              className="mt-5 h-1 w-full appearance-none rounded-full accent-white [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/60 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              type="range"
              min="0"
              max={song.duration}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
            />
            <div className="flex justify-between pt-2 text-xs font-medium text-white/60">
              <span>{formatTime(position)}</span>
              <span>{formatTime(song.duration)}</span>
            </div>

            <nav className="flex items-center justify-between px-5 pt-4">
              <button
                className={isShuffled ? "text-[#2f7df6]" : "text-white"}
                onClick={() => setIsShuffled(!isShuffled)}
              >
                <Shuffle />
              </button>
              <button onClick={() => changeSong(songIndex - 1)}>
                <SkipBack />
              </button>
              <button
                className="grid size-14 place-items-center rounded-full bg-[#2f7df6]"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause /> : <Play className="fill-white" />}
              </button>
              <button onClick={nextSong}>
                <SkipForward />
              </button>
              <button
                className={isRepeating ? "text-[#2f7df6]" : "text-white"}
                onClick={() => setIsRepeating(!isRepeating)}
              >
                <Repeat2 />
              </button>
            </nav>
          </section>
        </main>

        <section className="mt-5 border-t border-white/20 pt-3">
          <h2 className="text-sm my-3 font-semibold">Lyrics</h2>
          <div
            className="h-32 overflow-y-auto no-scrollbar text-center"
            ref={lyricContainerRef}
          >
            <div className="py-10 text-lg leading-7">
              {song.lyrics.map((lyric, index) => (
                <p
                  className={
                    index === activeLyricIndex
                      ? "active py-2 font-semibold text-xl"
                      : "inactive py-2 font-medium text-sm"
                  }
                  key={lyric.start}
                  ref={(element) => {
                    lyricRefs.current[index] = element;
                  }}
                >
                  {lyric.text}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
