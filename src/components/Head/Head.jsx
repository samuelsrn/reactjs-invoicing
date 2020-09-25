import React, { Component } from "react";

import "./style.css";

class Head extends Component {
  render() {
    return (
      <section>
        <div class="row">
          <div class="col-xs-12 heading">INVOICE</div>
        </div>
        <div class="row branding">
          <div class="col-xs-6">
            <div class="invoice-number-container">
              <label for="invoice-number">Invoice #</label>
              <input
                type="text"
                id="invoice-number"
                ng-model="invoice.invoice_number"
              />
            </div>
          </div>
          <div class="col-xs-6 logo-container">
            <input type="file" id="imgInp" />
            <img
              ng-hide="logoRemoved"
              id="company_logo"
              ng-src="{{ logo }}"
              alt="your image"
              width="300"
            />
            <div>
              <div class="noPrint" ng-hide="printMode">
                <a ng-click="editLogo()" href>
                  Edit Logo
                </a>
                <a> logo</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row infos">
          <div className="col-xs-6">
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container" data-ng-hide="printMode">
              <select></select>
            </div>
          </div>
          <div className="col-xs-6 right">
            <div classNameName="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
            <div className="input-container">
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Head;
