import { SVGProps } from "react";

/**
 * Props for icon SVG components.
 *
 * @typedef {IconSvgProps}
 */
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

/**
 * Props for the SvgWrapper component.
 *
 * @typedef {SvgWrapperProps}
 */
export type SvgWrapperProps = IconSvgProps & {
  children: React.ReactNode;
  fill?: string;
  viewBox: string;
};
