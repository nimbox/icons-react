import type { SVGProps } from "react";
const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="currentColor"
    {...props}
  >
    <path d="M24 10.5H8a1.5 1.5 0 0 1 0-3h16a1.5 1.5 0 0 1 0 3M24 17.5H8a1.5 1.5 0 0 1 0-3h16a1.5 1.5 0 0 1 0 3M19 24.5H8a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 0 1 0 3" />
    <path
      fill="none"
      d="M24 24h4.818c.115-.482.182-.983.182-1.5v-13C29 5.916 26.084 3 22.5 3h-13A6.51 6.51 0 0 0 3 9.5v13C3 26.084 5.916 29 9.5 29h13c.517 0 1.018-.067 1.5-.182z"
    />
    <path d="M22.5 0h-13C4.262 0 0 4.262 0 9.5v13C0 27.738 4.262 32 9.5 32h13c5.238 0 9.5-4.262 9.5-9.5v-13C32 4.262 27.738 0 22.5 0m-13 29A6.51 6.51 0 0 1 3 22.5v-13C3 5.916 5.916 3 9.5 3h13C26.084 3 29 5.916 29 9.5v13c0 .517-.067 1.018-.182 1.5H24v4.818a6.5 6.5 0 0 1-1.5.182z" />
  </svg>
);
export default SvgNote;
