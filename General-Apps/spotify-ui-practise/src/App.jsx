import {
  ChevronLeft, Ellipsis, Heart, Play, Repeat2, Shuffle, SkipBack, SkipForward,
} from "lucide-react";

function App() {
  return (
    <div className="h-dvh bg-black font-sans text-white">
      <div className="mx-auto h-full max-w-sm overflow-y-auto rounded-3xl bg-[#07172f] px-6 pb-5 pt-6 no-scrollbar">
        <header className="flex items-center justify-between text-sm font-semibold">
          <button type="button" aria-label="Go back"><ChevronLeft /></button>
          <p className="tracking-wide">NOW PLAYING</p>
          <button type="button" aria-label="More options"><Ellipsis /></button>
        </header>
        <main className="pt-5">
          <img className="mx-auto aspect-square w-[30vh] max-w-full rounded-2xl object-cover shadow-2xl shadow-black/60" src="/album-cover.jpg" alt="After Hours album cover" />
          <section className="pt-5">
            <div className="flex items-center justify-between gap-5">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">After Hours</h1>
                <p className="pt-1 text-base text-white/60">The Weeknd</p>
              </div>
              <button type="button" aria-label="Like song"><Heart /></button>
            </div>
            <input
              className="mt-5 h-1 w-full appearance-none rounded-full accent-white [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/60 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              type="range" min="0" max="236" defaultValue="0" aria-label="Song position"
            />
            <div className="flex justify-between pt-2 text-xs font-medium text-white/60">
              <span>0:00</span><span>3:56</span>
            </div>
            <nav className="flex items-center justify-between px-5 pt-4" aria-label="Playback controls">
              <button type="button" aria-label="Shuffle"><Shuffle /></button>
              <button type="button" aria-label="Previous song"><SkipBack /></button>
              <button type="button" className="grid size-14 place-items-center rounded-full bg-[#2f7df6]" aria-label="Play">
                <Play className="fill-white" />
              </button>
              <button type="button" aria-label="Next song"><SkipForward /></button>
              <button type="button" aria-label="Repeat"><Repeat2 /></button>
            </nav>
          </section>
        </main>
        <section className="mt-5 border-t border-white/20 pt-3">
          <h2 className="text-sm my-3 font-semibold">Lyrics</h2>
          <div className="h-32 overflow-y-auto no-scrollbar text-center">
            <div className="py-10 text-lg leading-7">
              <p className="active py-2 font-semibold text-xl">Midnight hangs above the avenue</p>
              <p className="inactive py-2 font-medium text-sm">Neon rain is painting every view</p>
              <p className="inactive py-2 font-medium text-sm">I can hear the city breathe</p>
              <p className="inactive py-2 font-medium text-sm">Every shadow moves with me</p>
              <p className="inactive py-2 font-medium text-sm">Keep the windows open wide</p>
              <p className="inactive py-2 font-medium text-sm">Let the blue lights flood inside</p>
              <p className="inactive py-2 font-medium text-sm">All the noise is fading slow</p>
              <p className="inactive py-2 font-medium text-sm">Where the quiet rivers flow</p>
              <p className="inactive py-2 font-medium text-sm">Hold this moment in your hand</p>
              <p className="inactive py-2 font-medium text-sm">Like a spark across the sand</p>
              <p className="inactive py-2 font-medium text-sm">When the morning finds the street</p>
              <p className="inactive py-2 font-medium text-sm">We will meet it on our feet</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
