'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Video, MessageCircle, Lock } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/live', icon: Video, label: 'Live Now' },
    { href: '/chat', icon: MessageCircle, label: 'Chat Rooms' },
    { href: '/private', icon: Lock, label: 'Private' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 z-50 md:hidden">
      <div className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                isActive ? 'text-purple-400' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}