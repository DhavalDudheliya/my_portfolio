import React from "react";

export default function Moon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <style>
        {`
          @keyframes moonPulse {
            0%, 100% {
              fill: #6366f1;
            }
            50% {
              fill: #a5b4fc;
            }
          }
          .moon-fill {
            animation: moonPulse 2s ease-in-out infinite;
          }
        `}
      </style>
      {/* Filled moon crescent - animated */}
      <path
        className="moon-fill"
        d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8A8,8,0,0,1,235.54,150.21Z"
      />
    </svg>
  );
}
