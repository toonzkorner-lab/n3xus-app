'use client';

import Link from 'next/link';

export default function WatchStream({ params }: { params: { id: string } }) {
  const streamId = params.id;

  const streams = {
    "1": { title: "Valorant Ranked Grind 🔥", streamer: "@xShadowKing", viewers: "14.2K" },
    "2": { title: "Late Night Lofi + Chill Vibes", streamer: "@LunaDreams", viewers: "8.7K" },
    "3": { title: "K-Pop Dance Practice Live", streamer: "@KPopVibes", viewers: "5.1K" },
    "4": { title: "React Coding Session", streamer: "@CodeWithNeo", viewers: "3.4K" },
  };

  const stream = streams[streamId as keyof typeof streams] || { 
    title: "Live Stream", 
    streamer: "Unknown", 
    viewers: "0" 
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-purple-400">
          ← Back
        </Link>
        <div className="flex items-center gap-2">
          <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </span>
        </div>
      </div>

      {/* Video Player Area */}
      <div className="aspect-video bg-zinc-950 relative flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="text-[120px] mb-6 opacity-80">📺</div>
          <h1 className="text-3xl font-bold mb-2 px-6">{stream.title}</h1>
          <p className="text-zinc-400 text-xl">{stream.streamer}</p>
        </div>
        
        {/* Fake "Live" overlay */}
        <div className="absolute top-4 right-4 bg-black/70 px-4 py-1 rounded-3xl text-sm flex items-center gap-2">
          <span className="text-red-500">●</span>
          <span>{stream.viewers} watching</span>
        </div>
      </div>

      {/* Stream Info + Chat */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">{stream.title}</h2>
            <p className="text-purple-400">{stream.streamer}</p>
          </div>
          <div className="text-right">
            <div className="text-emerald-400 font-bold">{stream.viewers} watching</div>
          </div>
        </div>

        {/* Fake Chat */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            💬 Live Chat
          </h3>
          <div className="h-80 bg-black rounded-2xl p-4 text-sm space-y-4 overflow-y-auto">
            <div><span className="text-cyan-400">@LunaDreams</span>: This clutch was insane!</div>
            <div><span className="text-pink-400">@xShadowKing</span>: LET'S GOOO 🔥</div>
            <div><span className="text-emerald-400">@CodeWithNeo</span>: Anyone else subbed today?</div>
            <div><span className="text-yellow-400">@KPopVibes</span>: The energy is unmatched</div>
          </div>
          
          <div className="mt-4 flex gap-2">
            <input 
              type="text" 
              placeholder="Send a message..." 
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-3xl px-5 py-3 text-sm focus:outline-none"
            />
            <button className="bg-purple-600 px-8 rounded-3xl font-medium">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}