import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'track-grid-item',
  styleUrl: 'track-grid-item.scss',
  shadow: true,
})
export class TrackGridItem {
  /** */
  @Prop({reflect:true}) s: number = 1;

  /** */
  @Prop({reflect:true}) md: number = 1;

  /** */
  @Prop({reflect:true}) l: number = 1;
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
