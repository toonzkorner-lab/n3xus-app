'use client';

import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar - N3xUs Style */}
      <nav className="bg-zinc-950 border-b border-zinc-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold">N3</div>
          <span className="text-3xl font-bold tracking-tighter text-purple-400">N3xUs</span>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search streamer" 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl py-3 px-5 pl-12 text-sm focus:outline-none focus:border-purple-500"
            />
            <div className="absolute left-5 top-3.5 text-zinc-400">🔍</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {isSignedIn ? (
            <>
              <div className="flex items-center gap-1 bg-zinc-900 px-4 py-2 rounded-3xl text-sm">
                <span className="text-yellow-400">♦</span> 4820
                <span className="text-cyan-400 ml-4">♦</span> 312
              </div>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <Link 
              href="/sign-in" 
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-3xl text-sm font-medium"
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>

      <div className="px-6 pt-8 max-w-7xl mx-auto">
        {/* Trending Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-semibold">Trending in N3xUs</h2>
            <span className="text-4xl">🔥</span>
          </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                id: 1, 
                icon: "🎮", 
                title: "Valorant Ranked Grind 🔥", 
                streamer: "@xShadowKing", 
                viewers: "14.2K" 
              },
              { 
                id: 2, 
                icon: "🌙", 
                title: "Late Night Lofi + Chill Vibes", 
                streamer: "@LunaDreams", 
                viewers: "8.7K" 
              },
              { 
                id: 3, 
                icon: "🎵", 
                title: "K-Pop Dance Practice Live", 
                streamer: "@KPopVibes", 
                viewers: "5.1K" 
              },
              { 
                id: 4, 
                icon: "🖥️", 
                title: "React Coding Session", 
                streamer: "@CodeWithNeo", 
                viewers: "3.4K" 
              },
            ].map((stream) => (
              <div 
                key={stream.id}
                className="bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all active:scale-95"
                onClick={() => window.location.href = `/watch/${stream.id}`}
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center relative">
                  <div className="text-8xl opacity-90">{stream.icon}</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span> LIVE
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-semibold text-lg leading-tight">{stream.title}</div>
                  <div className="text-zinc-400 text-sm mt-2">{stream.streamer} • {stream.viewers} watching</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
          <div className="text-zinc-400 text-lg">
            More live streams will appear here once creators go live on your platform.
          </div>
        </div>
      </div>

            {/* Real Go Live Button */}
      <Link 
        href="/go-live"
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-2xl transition-all active:scale-95 z-50"
      >
        📹
      </Link>
    </div>
  );
}