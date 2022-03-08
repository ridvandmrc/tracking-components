import { Component, Host, h, Element, Prop } from '@stencil/core';
import { getBreakpoints, setAllBreakPoints } from '../../utils/utils';
import { ColumnType, GridType, GRID } from '../../utils/type-utils';

@Component({
  tag: 'track-grid-container',
  styleUrl: 'track-grid-container.scss',
  shadow: true,
})
export class TrackGridContainer {
  @Element() host: HTMLElement;

  /**  */
  @Prop() col: ColumnType = { s: 1, md: 4, l: 8 };

  @Prop() space: ColumnType = { s: 1, md: 2, l: 3 };

  private observer: ResizeObserver;

  private readonly arrangeGridItemWidth = (baseContainer: GridType, baseItem: GridType) => {
    const items = Array.from(this.host.children).map(item => item as HTMLElement) as HTMLTrackGridItemElement[];
    items.forEach(gridItem => {
      const gridWidth = (gridItem[baseItem] / this.col[baseContainer]) * 100;
      gridItem.style.maxWidth = `${gridWidth}%`;
      gridItem.style.flexBasis = `${gridWidth}%`;
    });
  };

  private trackScreenSize = (): void => {
    const screenWidth = this.host.getBoundingClientRect().width;
    if (screenWidth < getBreakpoints().small) {
      this.arrangeGridItemWidth(GRID.small, GRID.small);
      this.setSpacer(GRID.small);
    } else if (screenWidth < getBreakpoints().medium) {
      this.arrangeGridItemWidth(GRID.medium, GRID.medium);
      this.setSpacer(GRID.medium);
    } else {
      this.arrangeGridItemWidth(GRID.large, GRID.large);
      this.setSpacer(GRID.large);
    }
  };

  private setSpacer = (baseContainer: GridType): void => {
    const items = Array.from(this.host.children).map(item => item as HTMLElement) as HTMLTrackGridItemElement[];
    items.forEach(gridItem => {
      const space = `${getBreakpoints().space * this.space[baseContainer]}px`;
      gridItem.style.paddingTop = space;
      gridItem.style.paddingLeft = space;
    });
  };

  componentDidLoad() {
    setAllBreakPoints();
    this.observer = new ResizeObserver(this.trackScreenSize);
    this.observer.observe(this.host);
    this.trackScreenSize();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
