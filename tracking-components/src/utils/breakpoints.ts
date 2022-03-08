export const setAllBreakPoints = (): void => {
  document.documentElement.style.setProperty('--large-screen', '900');
  document.documentElement.style.setProperty('--medium-screen', '700');
  document.documentElement.style.setProperty('--small-screen', '400');
  document.documentElement.style.setProperty('--space', '10');
};

export type BREAKPOINT_TYPES = {
  large: number;
  medium: number;
  small: number;
  space: number;
};

export const getBreakpoints = (): BREAKPOINT_TYPES => {
  return {
    large: Number(document.documentElement.style.getPropertyValue('--large-screen')),
    medium: Number(document.documentElement.style.getPropertyValue('--medium-screen')),
    small: Number(document.documentElement.style.getPropertyValue('--small-screen')),
    space: Number(document.documentElement.style.getPropertyValue('--space')),
  };
};
