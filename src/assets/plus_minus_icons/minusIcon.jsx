export const MinusIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_8100_2978)">
        <rect
          x="4"
          width="32"
          height="32"
          rx="16"
          fill="white"
          fill-opacity="0.1"
        />
        <path
          d="M27 15C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15H27Z"
          fill="white"
          fill-opacity="0.9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_8100_2978"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8100_2978"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8100_2978"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
