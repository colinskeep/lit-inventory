/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, property } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


class MyView1 extends PageViewElement {
  static get styles() {
    return [
      SharedStyles
    ];
  }
constructor() {
  super(); 
  var socket = io('http://localhost:3000');
  socket.on('inventory', function (data) {
    console.log(data);
  });
}

render() {     
    return html`
      <section>
        <h2>Inventory Items</h2>
        <div class="titles">
          <div class="title">
          SKU
          </div>
          <div class="title">
          Title
          </div>
          <div class="title">
          ASIN
          </div>
          <div class="title">
          eBay
          </div>
          <div class="title">
          BigCommerce
          </div>
          <div class="title">
          Quantity
          </div>
        </div>

      </section>
      <section>
      <div class="items">
        <div class="item">
        </div>
        <div class="item">
          this.title
        </div>
        <div class="item">
          this.asin
        </div>
        <div class="item">
          this.ebay
        </div>
        <div class="item">
          this.bigcommerce
        </div>
        <div class="item">
          this.quantity
        </div>
      </div>
      </section>
      <section>
      <div class="items">
        <div class="item">
          this.sku
        </div>
        <div class="item">
          this.title
        </div>
        <div class="item">
          this.asin
        </div>
        <div class="item">
          this.ebay
        </div>
        <div class="item">
          this.bigcommerce
        </div>
        <div class="item">
          this.quantity
        </div>
      </div>
      </section>
      <section>
      <div class="items">
        <div class="item">
          this.sku
        </div>
        <div class="item">
          this.title
        </div>
        <div class="item">
          this.asin
        </div>
        <div class="item">
          this.ebay
        </div>
        <div class="item">
          this.bigcommerce
        </div>
        <div class="item">
          this.quantity
        </div>
      </div>
      </section>
      <section>
      <p>456</p>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
