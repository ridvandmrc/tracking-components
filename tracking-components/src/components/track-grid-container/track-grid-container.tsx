import { Component, Host, h, Element, Prop } from '@stencil/core';

export interface ColumnType {
  s: number;
  md: number;
  l: number;
}

@Component({
  tag: 'track-grid-container',
  styleUrl: 'track-grid-container.scss',
  shadow: true,
})
export class TrackGridContainer {
  @Element() host: HTMLElement;

  /**  */
  @Prop() col: ColumnType = { s: 4, md: 4, l: 8 };

  private observer: ResizeObserver;
  private screenSize = null;

  private readonly arrangeGridItemWidth = (baseContainer: string, baseItem: string) => {
    const items = Array.from(this.host.children).map(item => item as HTMLElement) as HTMLTrackGridItemElement[];
    items.forEach((gridItem, index) => {
      const gridWidth = (gridItem[baseItem] / this.col[baseContainer]) * 100;
      gridItem.style.maxWidth = `${gridWidth}%`;
      gridItem.style.flexBasis = `${gridWidth}%`;
    });
  };

  private trackScreenSize = (): void => {
    const screenSize = getComputedStyle(this.host).getPropertyValue('--grid-count');
    if (screenSize !== this.screenSize) {
      console.debug(screenSize);
      this.screenSize = screenSize;

      this.arrangeGridItemWidth(screenSize, screenSize);
    }
  };

  componentDidLoad() {
    this.observer = new ResizeObserver(this.trackScreenSize);
    this.observer.observe(this.host);
    this.arrangeGridItemWidth('l', 'l');
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
