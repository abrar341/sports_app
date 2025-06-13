import React, { useEffect, useState } from "react";

function VideoPlayerModal({ videoUrl, onClose }) {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = "hidden";

    // Re-enable scroll on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-secondary bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative w-[90%] max-w-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
          aria-label="Close video"
        >
          &times;
        </button>
        <video
          src={videoUrl}
          controlsList="nodownload"
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

function PlayButton() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <button
        className="flex gap-3 items-center"
        aria-label="Play Demo"
        onClick={() => setShowPlayer(true)}
      >
        <div className="w-[70px] h-[70px] max-sm:w-[60px] max-sm:h-[60px]">
          <svg
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40.5"
              cy="40.5"
              r="40.5"
              fill="#1E40AF"
              fillOpacity="0.2"
            />
            <circle cx="40.5" cy="40.5" r="32.5" fill="white" />
            <path d="M50 40.5L35 49.5263L35 31.4737L50 40.5Z" fill="#1E40AF" />
          </svg>
        </div>
        <span className="text-lg font-bold tracking-wide text-white capitalize max-sm:text-xl">
          Play Demo...
        </span>
      </button>

      {showPlayer && (
        <VideoPlayerModal
          videoUrl="/assets/demo.mp4" // Replace with your actual video URL
          onClose={() => setShowPlayer(false)}
        />
      )}
    </>
  );
}

export default PlayButton;
