import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { FilmReel } from '../types';

interface VideoPlayerModalProps {
  reel: FilmReel | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ reel, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15);
  const [isMuted, setIsMuted] = useState(false);
  const [seconds, setSeconds] = useState(42);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle subtle ambient sound synthesis for cinematic immersive feel
  useEffect(() => {
    if (isPlaying && !isMuted) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(55, ctx.currentTime); // Low cinematic sub-rumble A1
          gain.gain.setValueAtTime(0.015, ctx.currentTime); // very subtle, safe volume

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();

          audioContextRef.current = ctx;
          oscillatorRef.current = osc;
          gainNodeRef.current = gain;
        }
      } catch {
        // audio context blocked or unsupported
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
        audioContextRef.current = null;
      }
    };
  }, [isPlaying, isMuted]);

  // Simulation timer for playback
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => (prev >= 180 ? 0 : prev + 1));
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!reel) return null;

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    const frames = Math.floor((totalSec * 24) % 24);
    return `00:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0e0e]/95 backdrop-blur-2xl p-2 sm:p-6 overflow-hidden">
      <div className="w-full max-w-5xl bg-[#131313] border border-[#4d463a]/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Monitor Header */}
        <div className="px-4 sm:px-6 py-3 bg-[#0e0e0e] border-b border-[#4d463a]/30 flex items-center justify-between font-tech-mono text-[11px] sm:text-[12px] text-[#998f81]">
          <div className="flex items-center gap-3">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isPlaying ? 'bg-red-500 animate-ping' : 'bg-[#998f81]'
              }`}
            ></span>
            <span className="text-[#e5e2e1] font-bold tracking-widest uppercase">
              {isPlaying ? '● REC' : '❚❚ PAUSED'} [{reel.format}]
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline">FPS: {reel.fps || '24.00'}</span>
            <span className="hidden sm:inline">SHUTTER: {reel.shutter || '180°'}</span>
            <span className="text-[#e5c484] font-medium font-tech-mono">
              TC: {formatTime(seconds)}
            </span>
            <button
              onClick={onClose}
              className="p-1 text-[#d0c5b5] hover:text-[#e5c484] transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Canvas Stage (2.39:1 scope or 16:9) */}
        <div className="relative w-full aspect-[2.39/1] sm:max-h-[60vh] bg-[#0e0e0e] overflow-hidden group">
          <img
            src={reel.imageUrl}
            alt={reel.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105' : 'scale-100 filter brightness-90'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Letterbox / Matte Bars overlay */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-black/80 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/80 pointer-events-none"></div>

          {/* Optical grid crosshairs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none opacity-40 flex items-center justify-center">
            <span className="w-full h-px bg-[#e5e2e1] absolute"></span>
            <span className="h-full w-px bg-[#e5e2e1] absolute"></span>
            <div className="w-6 h-6 border border-[#e5c484]/40 rounded-full absolute"></div>
          </div>

          {/* Center Play/Pause overlay */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-colors"
          >
            {!isPlaying && (
              <div className="w-16 h-16 rounded-full bg-[#0e0e0e]/80 backdrop-blur-md border border-[#e5c484] flex items-center justify-center text-[#e5c484] shadow-2xl">
                <Play size={28} className="fill-current ml-1" />
              </div>
            )}
          </div>
        </div>

        {/* Scrubber and Controls */}
        <div className="p-4 sm:p-6 bg-[#1c1b1b] border-t border-[#4d463a]/30 flex flex-col gap-4">
          {/* Progress Bar */}
          <div
            className="w-full h-1.5 bg-[#2a2a2a] relative cursor-pointer group"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newProgress = (clickX / rect.width) * 100;
              setProgress(newProgress);
              setSeconds(Math.floor((newProgress / 100) * 180));
            }}
          >
            <div
              className="h-full bg-[#e5c484] relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#e5c484] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Playback Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-[#2a2a2a] border border-[#e5c484]/40 text-[#e5c484] hover:bg-[#e5c484] hover:text-[#131313] transition-all flex items-center justify-center cursor-pointer"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => {
                  setProgress(0);
                  setSeconds(0);
                }}
                className="p-2 text-[#d0c5b5] hover:text-[#e5c484] transition-colors cursor-pointer"
                title="Restart"
              >
                <RotateCcw size={16} />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-[#d0c5b5] hover:text-[#e5c484] transition-colors cursor-pointer flex items-center gap-1.5"
                title={isMuted ? 'Unmute Ambient Drone' : 'Mute Ambient Drone'}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span className="font-tech-mono text-[10px] text-[#998f81] uppercase hidden md:inline">
                  {isMuted ? 'MUTED' : '55HZ DRONE'}
                </span>
              </button>
            </div>

            {/* Reel Title & Format Badges */}
            <div className="flex items-center gap-3">
              <span className="font-serif-display text-lg text-[#e5e2e1] hidden lg:inline">
                {reel.title}
              </span>
              <span className="px-2.5 py-1 bg-[#201f1f] border border-[#4d463a]/30 font-tech-mono text-[10px] text-[#c7c6c6]">
                {reel.audioSpec}
              </span>
              <span className="px-2.5 py-1 bg-[#201f1f] border border-[#4d463a]/30 font-tech-mono text-[10px] text-[#c7c6c6]">
                {reel.scopeSpec}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
