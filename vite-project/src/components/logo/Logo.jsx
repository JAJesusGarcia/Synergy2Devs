import React from 'react';

const AtomIcon = ({ size = 50 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={size}
    height={size}
  >
    {/* <!-- Órbitas --> */}
    <ellipse
      cx="100"
      cy="100"
      rx="90"
      ry="30"
      fill="none"
      stroke="#FF6347"
      strokeWidth="4"
      transform="rotate(0 100 100)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 100 100"
        to="360 100 100"
        dur="10s"
        repeatCount="indefinite"
      />
    </ellipse>
    <ellipse
      cx="100"
      cy="100"
      rx="90"
      ry="30"
      fill="none"
      stroke="#4682B4"
      strokeWidth="4"
      transform="rotate(60 100 100)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="60 100 100"
        to="420 100 100"
        dur="8s"
        repeatCount="indefinite"
      />
    </ellipse>
    <ellipse
      cx="100"
      cy="100"
      rx="90"
      ry="30"
      fill="none"
      stroke="#32CD32"
      strokeWidth="4"
      transform="rotate(120 100 100)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="120 100 100"
        to="480 100 100"
        dur="12s"
        repeatCount="indefinite"
      />
    </ellipse>

    {/* <!-- Electrones --> */}
    <circle cx="190" cy="100" r="8" fill="#FFD700">
      <animateMotion
        path="M0 0a90 30 0 1 1 0 1"
        dur="10s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="145" cy="170" r="8" fill="#FF69B4">
      <animateMotion
        path="M0 0a90 30 0 1 1 0 1"
        dur="8s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="55" cy="30" r="8" fill="#00CED1">
      <animateMotion
        path="M0 0a90 30 0 1 1 0 1"
        dur="12s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Núcleo */}
    <circle cx="100" cy="100" r="20" fill="url(#grad)">
      <animate
        attributeName="r"
        values="20;22;20;20"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Gradiente para el núcleo */}
    <defs>
      <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#FF6347', stopOpacity: 1 }} />

        <stop offset="1000%" style={{ stopColor: '#FF6347', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
  </svg>
);

export default AtomIcon;
