'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

export default function GoLivePage() {
  const { user } = useUser();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startPreview = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      if (videoRef.current) videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
      setIsPreviewOn(true);
    } catch (err) {
      alert("Camera access denied. Please allow camera and microphone permissions.");
    }
  };

  const stopPreview = () => {
    if (stream) stream.getTracks().forEach(track => track.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setIsPreviewOn(false);
    setStream(null);
  };

  const goLive = () => {
    alert(`🚀 GOING LIVE!\n\nUsername: ${user?.username || user?.firstName || 'You'}\n\nYour stream is now broadcasting.\n\n(In full version this connects to real viewers)`);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
        <Link href="/" className="text-purple-400">← Back</Link>
        <h1 className="text-2xl font-bold">Go Live</h1>
        <div></div>
      </div>

      <div className="p-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Ready to Go Live?</h2>
          <p className="text-zinc-400">Preview your camera then go live to your audience</p>
        </div>

        {/* Camera Preview */}
        <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden mb-8 relative border border-zinc-700">
          {isPreviewOn ? (
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📹</div>
                <p className="text-zinc-400">Camera preview will appear here</p>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {!isPreviewOn ? (
            <button 
              onClick={startPreview}
              className="w-full bg-purple-600 hover:bg-purple-700 py-5 rounded-3xl text-xl font-bold"
            >
              Start Camera Preview
            </button>
          ) : (
            <>
              <button 
                onClick={stopPreview}
                className="w-full bg-zinc-700 hover:bg-zinc-600 py-4 rounded-3xl text-lg"
              >
                Stop Preview
              </button>
              <button 
                onClick={goLive}
                className="w-full bg-green-600 hover:bg-green-700 py-5 rounded-3xl text-xl font-bold"
              >
                🚀 GO LIVE NOW
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}