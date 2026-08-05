# @nimbox/icons-react

React SVG icon components for Nimbox, generated from SVG sources with [SVGR](https://react-svgr.com/).

Each icon is an individual, tree-shakeable component that accepts standard
`SVGProps<SVGSVGElement>` (`className`, `style`, `onClick`, …). Color follows
the current text color (`fill: currentColor`) and the icon scales with font
size (`width`/`height` are `1em`).

```tsx
import { CheckIcon, CalendarIcon } from '@nimbox/icons-react';

<CheckIcon className="w-6 h-6 text-green-500" />;
```

## Adding or updating icons

1. Drop/replace the source SVG in `src/icons/outlines/` (or `src/icons/sources/`
   for Figma exports that get copied into `outlines/` on build).
2. Regenerate the React components:
   ```sh
   npm run build:icons
   ```
   This rewrites `src/icons/components/*.tsx` and the barrel `index.ts`. The
   generated components are committed.
3. Commit and release (`npm version <patch|minor|major>`).

## Build

```sh
npm run build          # build:icons → build:types → rollup (esm + cjs + d.ts)
npm run storybook      # browse the icon gallery
```


## Local development against consumers

Use [yalc](https://github.com/wclr/yalc) to link this package into a consumer
(e.g. `@nimbox/js-react-lux`) without publishing:

```sh
npm run build:watch:yalc   # rebuilds and runs `yalc push` on change
```

## Build Icons

1. Open `icons.ai`.
2. Saves as `outlines.ai`.
3. Select the line of one icon.
4. In the menu do `Select/Same/Fill & Stroke`.
5. In the menu do `Object/Path/Outline Stroke`.
6. In the menu do `File/Export/Export for Screens...`.
   1. Export to: `outlines`.
   2. Configure SVG export to be:
      * Styling: Presentation Attributes
      * Font: Convert to Outlines
      * Images: Preserve
      * Object IDs: Minimal
      * Decimal: 4
      * Minify: Yes
      * Responsive: Yes
  