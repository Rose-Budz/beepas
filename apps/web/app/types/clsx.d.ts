// Minimal type declaration for `clsx` (returns a string of class names)
declare function clsx(
  ...inputs: Array<
    | string
    | number
    | null
    | undefined
    | Record<string, boolean>
    | Array<string | number | null | undefined | Record<string, boolean>>
  >
): string;
export default clsx;
