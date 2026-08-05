import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M26.582 29H5.418A3.42 3.42 0 0 1 2 25.582V6.418A3.42 3.42 0 0 1 5.418 3h21.164A3.42 3.42 0 0 1 30 6.419v19.163A3.42 3.42 0 0 1 26.582 29ZM5.418 6A.42.42 0 0 0 5 6.419v19.163c0 .23.187.418.418.418h21.164c.23 0 .418-.187.418-.418V6.419A.42.42 0 0 0 26.582 6z" />
    <path d="M9 6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3A1.5 1.5 0 0 1 9 6M23 6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 3 0v3A1.5 1.5 0 0 1 23 6M28.5 14h-25a1.5 1.5 0 0 1 0-3h25a1.5 1.5 0 0 1 0 3" />
  </svg>
);
export default SvgCalendar;
