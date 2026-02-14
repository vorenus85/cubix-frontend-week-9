/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class PodiumElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px #e2e2e2;
        background: #e2e2e2;
        max-width: 800px;
        font-family: 'Open Sans', sans-serif;
        border-radius: 10px;
      }

      * {
        box-sizing: border-box;
      }

      h2 {
        margin-bottom: 16px;
        text-align: center;
        color: #555;
        font-size: 1.25rem;
      }

      .podium {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      ::slotted(div) {
        width: 100%;
        text-align: center;
        color: black;
        font-weight: bold;
        padding-top: 8px;
        background: #fff;
        padding: 10px;
        font-weight: 400;
        color: teal;
        border-top: solid 1px #e2e2e2;
        text-align: left;
        box-sizing: border-box;
      }

      ::slotted(:first-child) {
        color: blue;
      }

      ::slotted(:last-child) {
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    `;
  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      />
      <h2>Podium</h2>
      <ul class="podium">
        <slot class="podium-item"></slot>
      </ul>
    `;
  }
}

window.customElements.define('podium-element', PodiumElement);
