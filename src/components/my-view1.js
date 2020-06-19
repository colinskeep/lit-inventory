/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
import { until } from 'lit-html/directives/until';
import { SharedStyles } from './shared-styles.js';


class MyView1 extends LitElement {
  static get styles() {
    return [
      SharedStyles,
    ];
  }
  static get properties() {
    return {
      messageRequest: { type: String },
    };
  }
constructor() {
  super(); 
  this._fetchMessage();
  var socket = io('http://localhost:3000');

}

render() {
    return html`
    <div>
        <!--
          When rendering promises, it can be useful to display placeholder content during loading.
          You can use the until directive for this. The first paramter should be the promise to render,
          the optional second parameter is the template that is rendered during loading.
        -->
        ${until(this.messageRequest, html`Loading...`)}
        <button @click="${() => this._fetchMessage()}">
          Fetch message
        </button>
      </div>
      
    `;
  }
  _fetchMessage() {
    this.messageRequest = new Promise((resolve) => {

      setTimeout(() => resolve('Hello world'), 2000);
    });
  }

  /*_fetchMessage() {
    var socket = io('http://localhost:3000');
    this.items = new Promise((resolve) => {
      socket.on('inventory', function (data) {
        console.log(data);
        resolve(data); 
      });
    })

  }*/

}

window.customElements.define('my-view1', MyView1);

/*
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
        ${until(this.items.sku, html`Loading...`)}
        ${this.items.sku}
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
      */
