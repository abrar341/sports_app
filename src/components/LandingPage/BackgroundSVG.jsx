const BackgroundSVG = () => {
  return (
    <svg
      className="absolute top-0 right-0 w-96 h-auto z-0"
      width="588"
      height="1075"
      viewBox="0 0 588 1075"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.52" filter="url(#filter0_d_2122_196)">
        <rect
          x="457.65"
          y="-20.7061"
          width="785.242"
          height="729.789"
          rx="60"
          transform="rotate(38.557 457.65 -20.7061)"
          fill="white"
          fillOpacity="0.1"
          shapeRendering="crispEdges"
        />
        <rect
          x="457.412"
          y="-22.814"
          width="788.242"
          height="732.789"
          rx="61.5"
          transform="rotate(38.557 457.412 -22.814)"
          stroke="white"
          strokeOpacity="0.32"
          strokeWidth="3"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2122_196"
          x="0.0922852"
          y="0.608398"
          width="1074.29"
          height="1073.49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="32" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2122_196" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2122_196" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default BackgroundSVG;
