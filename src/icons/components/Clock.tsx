import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M16 29C8.832 29 3 23.169 3 16S8.832 3 16 3s13 5.832 13 13-5.832 13-13 13m0-23C10.486 6 6 10.486 6 16s4.486 10 10 10 10-4.486 10-10S21.514 6 16 6" />
    <path d="M19.999 21c-.272 0-.547-.073-.794-.228l-4-2.5A1.5 1.5 0 0 1 14.5 17v-6.5a1.5 1.5 0 0 1 3 0v5.669l3.295 2.06A1.5 1.5 0 0 1 19.999 21Z" />
  </svg>
);
export default SvgClock;
