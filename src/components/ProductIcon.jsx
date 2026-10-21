import React from 'react';

export default function ProductIcon({ type = 'bottle1', className = 'product-icon' }) {
  if (type === 'tube1') {
    return (
      <svg viewBox="0 0 80 100" className={className}>
        <path d="M35 8 h10 l4 10 h-18 z" fill="#1C86C4" />
        <path
          d="M25 18 h30 l6 60 q0 12 -21 12 q-21 0 -21 -12 z"
          fill="#EAF6FA"
          stroke="#7FCBE0"
          strokeWidth="3"
        />
        <rect x="30" y="45" width="20" height="18" fill="#B9DDE8" />
      </svg>
    );
  }

  if (type === 'bottleRound') {
    return (
      <svg viewBox="0 0 80 100" className={className}>
        <rect x="32" y="8" width="16" height="10" rx="3" fill="#4FB8D6" />
        <path
          d="M22 20 q-6 30 0 55 q18 15 36 0 q6 -25 0 -55 z"
          fill="#EAF6FA"
          stroke="#7FCBE0"
          strokeWidth="3"
        />
        <circle cx="40" cy="55" r="10" fill="#B9DDE8" />
      </svg>
    );
  }

  if (type === 'box1') {
    return (
      <svg viewBox="0 0 80 100" className={className}>
        <rect x="15" y="20" width="50" height="65" rx="4" fill="#EAF6FA" stroke="#7FCBE0" strokeWidth="3" />
        <rect x="33" y="35" width="14" height="35" fill="#B9DDE8" />
        <rect x="22" y="47" width="36" height="11" fill="#B9DDE8" />
      </svg>
    );
  }

  // Default bottle1
  return (
    <svg viewBox="0 0 80 100" className={className}>
      <rect x="30" y="5" width="20" height="10" rx="2" fill="#1C86C4" />
      <rect
        x="20"
        y="18"
        width="40"
        height="75"
        rx="8"
        fill="#EAF6FA"
        stroke="#7FCBE0"
        strokeWidth="3"
      />
      <rect x="25" y="40" width="30" height="20" fill="#B9DDE8" />
    </svg>
  );
}
