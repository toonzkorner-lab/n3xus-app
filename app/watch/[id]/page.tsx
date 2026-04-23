'use client';

import Link from 'next/link';

export default function WatchStream({ params }: { params: { id: string } }) {
  const streamId = params.id;

  const streams = {
    "1": { title: "Valorant Ranked Grind 🔥", streamer: "@xShadowKing", viewers: "14,289" },
    "2": { title: "Late Night Lofi + Chill Vibes", streamer: "@LunaDreams", viewers: "8,742" },
    "3": { title: "K-Pop Dance Practice Live", streamer: "@KPopVibes", viewers: "5,134" },
    "4": { title: "React Coding Session", streamer: "@CodeWithNeo", viewers: "3,467" },
  };

  const stream = streams[streamId as keyof typeof streams] || { 
    title: "Live Stream", 
    streamer: "Unknown Streamer", 
    viewers: "0" 
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 p-4 flex items-center justify-between">
        <Link href="/" className="text-purple-400 font-medium flex items-center gap-2">
          ← Home
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-red-600 px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            LIVE
          </span>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="aspect-video bg-zinc-950 relative flex items-center justify-center border-b border-zinc-800">
        <div className="text-center px-6">
          <div className="text-[140px] mb-6 opacity-70">📺</div>
          <h1 className="text-3xl font-bold leading-tight mb-3">{stream.title}</h1>
          <p className="text-purple-400 text-2xl">{stream.streamer}</p>
        </div>

        {/* Live Stats Overlay */}
        <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-5 py-2 rounded-2xl text-sm flex items-center gap-2">
          <span className="text-red-500">●</span>
          <span className="font-medium">{stream.viewers} watching now</span>
        </div>
      </div>

      {/* Stream Info */}
      <div className="p-6">
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">{stream.title}</h2>
            <p className="text-purple-400 mt-1">{stream.streamer}</p>
          </div>
          <div className="text-right">
            <div className="text-emerald-400 font-bold text-xl">{stream.viewers}</div>
            <div className="text-xs text-zinc-500">watching</div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-zinc-900 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-lg">💬 Live Chat</h3>
            <span className="text-xs text-zinc-500">1,234 messages</span>
          </div>
          
          <div className="h-80 bg-black rounded-2xl p-5 text-sm space-y-4 overflow-y-auto mb-4">
            <div><span className="text-cyan-400">@LunaDreams</span>: This is so relaxing 😌</div>
            <div><span className="text-pink-400">@xShadowKing</span>: Clutch moment incoming!</div>
            <div><span className="text-emerald-400">@CodeWithNeo</span>: Sub if you love coding streams</div>
            <div><span className="text-yellow-400">@KPopVibes</span>: The choreography is insane today</div>
          </div>

          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="Type a message..." 
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-3xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500"
            />
            <button className="bg-purple-600 px-8 rounded-3xl font-medium">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}