import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'track-grid-item',
  styleUrl: 'track-grid-item.scss',
  shadow: true,
})
export class TrackGridItem {
  /** */
  @Prop() s: number = 1;

  /** */
  @Prop() m: number = 1;

  /** */
  @Prop() l: number = 2;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
