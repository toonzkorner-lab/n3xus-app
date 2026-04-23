'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold">N3</div>
          <span className="text-3xl font-bold tracking-tighter text-purple-400">N3xUs</span>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <input 
            type="text" 
            placeholder="Search streamer" 
            className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl py-3 px-5 text-sm focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 bg-zinc-900 px-4 py-2 rounded-3xl text-sm">
            <span className="text-yellow-400">♦</span> 4820
            <span className="text-cyan-400 ml-4">♦</span> 312
          </div>
          <div className="w-8 h-8 bg-purple-500 rounded-full">👾</div>
        </div>
      </nav>

      <div className="px-6 pt-8">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-semibold">Trending in N3xUs</h2>
          <span className="text-3xl">🔥</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🎮", title: "Valorant Ranked Grind 🔥", streamer: "@xShadowKing", viewers: "14.2K" },
            { icon: "🌙", title: "Late Night Lofi + Chill Vibes", streamer: "@LunaDreams", viewers: "8.7K" },
            { icon: "🎵", title: "K-Pop Dance Practice Live", streamer: "@KPopVibes", viewers: "5.1K" },
            { icon: "🖥️", title: "React Coding Session", streamer: "@CodeWithNeo", viewers: "3.4K" },
          ].map((s, i) => (
            <div key={i} className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-all" onClick={() => alert(`Opening ${s.title}`)}>
              <div className="h-52 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center relative">
                <div className="text-8xl">{s.icon}</div>
                <div className="absolute top-4 left-4 bg-red-600 px-4 py-1 rounded-3xl text-xs font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE
                </div>
              </div>
              <div className="p-5">
                <div className="font-semibold">{s.title}</div>
                <div className="text-zinc-400 text-sm mt-1">{s.streamer} • {s.viewers} watching</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Go Live Button */}
      <Link href="/go-live" className="fixed bottom-8 right-8 bg-purple-600 w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-2xl hover:bg-purple-700 transition-all">
        📹
      </Link>
    </div>
  );
}