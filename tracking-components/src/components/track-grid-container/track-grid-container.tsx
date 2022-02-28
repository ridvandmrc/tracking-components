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
  @Prop() col: ColumnType = { s: 4, md: 8, l: 24 };

  private readonly arrangeGridItemWidth = () => {
    const items = Array.from(this.host.children).map(item => item as HTMLElement) as HTMLTrackGridItemElement[];
    items.forEach((gridItem, index) => {
      const gridWidth = (gridItem.l / this.col.l) * 100;
      console.log(gridItem.l,'/',this.col.l)
      gridItem.style.width = `${gridWidth}%`
    });
    console.log(items);
  };

  componentDidRender() {
    this.host.style.setProperty('--grid-count', `${this.col.s}`);
    this.arrangeGridItemWidth();
  }

  render() {
    return (
      <Host>
        {' '}
        <slot />
      </Host>
    );
  }
}
