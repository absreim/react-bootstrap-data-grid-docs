import { FC } from "react";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    aria-label="Logo for react-bootstrap-data-grid"
  >
    <title>Logo for react-bootstrap-data-grid</title>
    <g className="logo-grid" fill="none" stroke="currentColor">
      <polygon points="6 4.35 2 5.05 2 3.05 6 2.35 6 4.35" />
      <polygon points="10 3.64 6 4.35 6 2.35 10 1.64 10 3.64" />
      <polygon points="6 6.35 2 7.05 2 5.05 6 4.35 6 6.35" />
      <polygon points="10 5.64 6 6.35 6 4.35 10 3.64 10 5.64" />
      <polygon points="6 8.35 2 9.05 2 7.05 6 6.35 6 8.35" />
    </g>
    <polyline
      fill="none"
      className="logo-letter"
      stroke="currentColor"
      points="6.98 14.61 6.98 7.17 13.92 5.95 13.92 8.97 9.35 9.77 9.35 11.29 9.35 11.34 13.92 13.39"
    />
  </svg>
);

export default Logo;
