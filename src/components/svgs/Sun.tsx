import React from "react";

export default function Sun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <style>
        {`
          @keyframes sunPulse {
            0%, 100% {
              fill: #f97316;
            }
            50% {
              fill: #fbbf24;
            }
          }
          .sun-center {
            animation: sunPulse 2s ease-in-out infinite;
          }
        `}
      </style>
      {/* Sun rays - warm amber color */}
      <path
        fill="#ea580c"
        d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
      />
      {/* Sun center circle - animated fill */}
      <circle className="sun-center" cx="128" cy="128" r="48" />
    </svg>
  );
}
