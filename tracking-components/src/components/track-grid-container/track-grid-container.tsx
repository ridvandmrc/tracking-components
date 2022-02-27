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
  @Prop() col: ColumnType = { s: 4, md: 8, l: 12 };

  componentDidRender(){
    this.host.style.setProperty('--grid-count',`${this.col.s}`)
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div class="one"></div><div class="two"></div>
      </Host>
    );
  }
}
