'use client';

import { useEffect, useRef, useState } from 'react';

interface BackgroundMusicProps {
  src: string;
}

export const BackgroundMusic = ({ src }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Only try to play if permission was granted
    if (permissionGranted) {
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.info("Playback failed:", error);
            setIsPlaying(false);
          });
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, permissionGranted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  const handleAccept = () => {
    setShowBanner(false);
    setPermissionGranted(true);
  };

  const handleDecline = () => {
    setShowBanner(false);
    setPermissionGranted(false);
    setIsPlaying(false);
  };

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 text-white p-4 z-50 flex justify-between items-center">
          <span>¿Deseas reproducir música de fondo para una experiencia inmersiva?</span>
          <div className="flex gap-2">
            <button 
              onClick={handleAccept}
              className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md"
            >
              Aceptar
            </button>
            <button 
              onClick={handleDecline}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-1 rounded-md"
            >
              No, gracias
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-50 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>
    </>
  );
}; 