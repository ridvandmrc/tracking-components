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

export type TRACK_FUNCTION = {
  large: () => void;
  medium: () => void;
  small: () => void;
};

export enum SCREEN_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}
export const getBreakpoints = (): BREAKPOINT_TYPES => {
  return {
    large: Number(document.documentElement.style.getPropertyValue('--large-screen')),
    medium: Number(document.documentElement.style.getPropertyValue('--medium-screen')),
    small: Number(document.documentElement.style.getPropertyValue('--small-screen')),
    space: Number(document.documentElement.style.getPropertyValue('--space')),
  };
};

export const checkScreenSize = (size: number) => {
  return {
    isSmall: () => size < getBreakpoints().small,
    isMedium: () => size > getBreakpoints().small && size < getBreakpoints().medium,
    isLarge: () => size > getBreakpoints().medium && size < getBreakpoints().large,
  };
};

export const getScreen = (screenWidth: number): SCREEN_SIZE => {
  if (checkScreenSize(screenWidth).isSmall()) {
    return SCREEN_SIZE.small;
  } else if (checkScreenSize(screenWidth).isMedium()) {
    return SCREEN_SIZE.medium;
  } else {
    return SCREEN_SIZE.large;
  }
};
export class EvaluateMediaQuery {
  private trackElement: ResizeObserver = null;
  constructor(private element, private callbackObj: TRACK_FUNCTION) {
    this.trackElement = new ResizeObserver(this.trackFunction);
    this.trackElement.observe(this.element);
  }

  private trackFunction = (screenWidth: ResizeObserverEntry[]) => {
    this.callbackObj[getScreen(screenWidth[0].contentRect.width)]();
  };

  public disconnect = () => {
    this.trackElement.disconnect();
  };
}
