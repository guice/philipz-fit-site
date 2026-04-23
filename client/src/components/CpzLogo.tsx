/* ==========================================================================
   CPZ Logo — inline SVG component
   Replaces <img src="*.svg"> for full cross-browser compatibility.
   Pass `size` (height in px) to scale; width is always auto via viewBox.
   ========================================================================== */

interface CpzLogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CpzLogo({ size = 38, className, style }: CpzLogoProps) {
  return (
    <svg
      viewBox="78.267415 21.49039 550 475"
      height={size}
      width="auto"
      aria-label="CPZ Fitness logo"
      role="img"
      className={className}
      style={{ display: "block", flexShrink: 0, ...style }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="cpz-lg1" x1="152.84853" y1="321.21249" x2="528.57257" y2="321.21249" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8c00" stopOpacity="1" offset="0" />
        </linearGradient>
        <linearGradient id="cpz-lg2" x1="199.66335" y1="140.02071" x2="567.21753" y2="140.02071" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8c00" stopOpacity="1" offset="0" />
        </linearGradient>
        <linearGradient id="cpz-lg4" x1="139.55736" y1="394.90244" x2="280.55737" y2="394.90244" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.24006273,0.96508066)">
          <stop stopColor="#ff8c00" stopOpacity="1" offset="0" />
        </linearGradient>
        <linearGradient id="cpz-lg5" x1="297.12366" y1="221.95987" x2="538.21021" y2="221.95987" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0737987,0.13182315)">
          <stop stopColor="#9d5a00" stopOpacity="1" offset="0" />
        </linearGradient>
      </defs>
      <g transform="translate(-78.267415,-21.49039)">
        <path
          d="m 280.3173,367.00474 -11,57.14209 h -130 l 13.65741,-56.71116 z"
          fill="url(#cpz-lg4)"
        />
        <path
          d="m 377.21318,185.90748 160.89493,-0.23992 -251.22463,60.1676 z"
          fill="url(#cpz-lg5)"
        />
        <path
          d="m 178.13455,275.76734 350.43801,-1.27781 -30.85622,92.0717 -344.86781,1.37421 z"
          fill="url(#cpz-lg1)"
        />
        <path
          d="m 223.66334,94.15693 343.55419,-0.32298 -29.25972,91.99242 -338.29447,0.38108 z"
          fill="url(#cpz-lg2)"
        />
      </g>
    </svg>
  );
}
