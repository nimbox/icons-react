import type { SVGProps } from "react";
const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M22.5 32h-13C4.262 32 0 27.738 0 22.5v-13C0 4.262 4.262 0 9.5 0h13C27.738 0 32 4.262 32 9.5v13c0 5.238-4.262 9.5-9.5 9.5M9.5 3A6.51 6.51 0 0 0 3 9.5v13C3 26.084 5.916 29 9.5 29h13c3.584 0 6.5-2.916 6.5-6.5v-13C29 5.916 26.084 3 22.5 3z" />
    <path d="M14 22.5c-.456 0-.887-.207-1.17-.563l-4-5a1.5 1.5 0 1 1 2.34-1.874L14 18.599l6.83-8.536a1.5 1.5 0 1 1 2.34 1.874l-8 10A1.5 1.5 0 0 1 14 22.5" />
  </svg>
);
export default SvgCheckbox;
