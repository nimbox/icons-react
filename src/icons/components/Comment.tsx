import type { SVGProps } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M9 30a1.5 1.5 0 0 1-1.5-1.5v-4.78C4.325 22.83 2 19.884 2 16.487V9.513C2 5.37 5.37 2 9.513 2h12.974C26.63 2 30 5.37 30 9.513v6.974C30 20.63 26.63 24 22.487 24H17.5l-7.6 5.7c-.264.198-.582.3-.9.3m.513-25A4.52 4.52 0 0 0 5 9.513v6.974c0 2.323 1.813 4.297 4.126 4.491a1.5 1.5 0 0 1 1.374 1.496V25.5l5.6-4.2c.26-.195.576-.3.9-.3h5.487A4.52 4.52 0 0 0 27 16.487V9.513A4.52 4.52 0 0 0 22.487 5z" />
  </svg>
);
export default SvgComment;
