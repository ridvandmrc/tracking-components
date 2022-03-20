import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';
import { EvaluateMediaQuery, getBreakpoints, setAllBreakPoints } from '../../utils/utils';
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

  private observer: EvaluateMediaQuery;

  @Watch('col')
  setCol() {
    console.log('set cols');
    this.setContainerSize(GRID.small, GRID.small);
    this.setContainerSize(GRID.large, GRID.large);
    this.setContainerSize(GRID.medium, GRID.medium);
  }

  private readonly arrangeGridItemWidth = (baseContainer: GridType, baseItem: GridType) => {
    const items = Array.from(this.host.children).map(item => item as HTMLElement) as HTMLTrackGridItemElement[];
    items.forEach(gridItem => {
      const gridWidth = (gridItem[baseItem] / this.col[baseContainer]) * 100;
      gridItem.style.maxWidth = `${gridWidth}%`;
      gridItem.style.flexBasis = `${gridWidth}%`;
    });
  };

  private readonly setContainerSize = (baseContainer: GridType, baseItem: GridType): void => {
    this.arrangeGridItemWidth(baseContainer, baseItem);
    this.setSpacer(baseContainer);
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
    this.observer = new EvaluateMediaQuery(this.host, {
      small: () => this.setContainerSize(GRID.small, GRID.small),
      large: () => this.setContainerSize(GRID.large, GRID.large),
      medium: () => this.setContainerSize(GRID.medium, GRID.medium),
    });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
