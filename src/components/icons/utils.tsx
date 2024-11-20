import { SvgWrapperProps } from "@/types";

/**
 * Wrapper for SVG elements.
 *
 * This component aims to provide a consistent, pre-configured SVG element
 * wrapper, including aria settings, xmlns, and other common attributes.
 *
 * @param {SvgWrapperProps} param0
 * @param {*} param0.children
 * @param {*} param0.viewBox
 * @param {*} [param0.fill="none"]
 * @param {*} param0....props
 * @returns {*}
 */
export const SvgWrapper = ({
  children,
  viewBox,
  ...props
}: SvgWrapperProps) => (
  <svg
    aria-hidden="true"
    className={`fill-foreground ${props.className}`}
    focusable="false"
    height={props.size || props.height || 24}
    role="presentation"
    viewBox={viewBox}
    width={props.size || props.width || 24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);
