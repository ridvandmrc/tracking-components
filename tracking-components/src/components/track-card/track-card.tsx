import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'track-card',
  styleUrl: 'track-card.scss',
  shadow: true,
})
export class TrackCard {
  @Element() host: HTMLElement;

  render() {
    return (
      <Host>
        <slot name="title" />
        <slot />
        <slot name="footer" />
      </Host>
    );
  }
}
