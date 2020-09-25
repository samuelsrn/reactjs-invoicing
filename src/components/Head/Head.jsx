import React, { Component } from "react";
import logo from "./metaware_logo.png";
import "./style.css";

class Head extends Component {
  render() {
    return (
    <section>
    <div className="row">
      <div className="col-xs-12 heading">
        INVOICE
      </div>
    </div>
    <div className="row branding">
      <div className="col-xs-6">
        <div className="invoice-number-container">
          <label for="invoice-number">Invoice #</label><input value="10" type="text" id="invoice-number"/>
        </div>
      </div>
      <div className="col-xs-6 logo-container">
        <input type="file" id="imgInp" />
        <img src={logo} id="company_logo" alt="your image" width="300" />
        <div>
          <div className="noPrint">
            <a>Edit Logo</a>
            <a id="remove_logo"> Hide logo</a>
          </div>
        </div>
      </div>
    </div>
      <div className="row infos">
        <div className="col-xs-6">
          <div className="input-container">
            <input type="text" value="Mr. John Doe"/>
          </div>
          <div className="input-container">
            <input type="text" value="John Doe Designs Inc."/>
          </div>
          <div className="input-container">
            <input type="text" value="1 Infinite Loop"/>
          </div>
          <div className="input-container">
            <input type="text" value="Cupertino, California, US"/>
          </div>
          <div className="input-container">
            <input type="text" value="90210"/>
          </div>
          <div className="input-container">
            <select></select>
          </div>
        </div>
        <div className="col-xs-6 right">
          <div className="input-container">
            <input type="text" value="Metaware Labs"/>
          </div>
          <div className="input-container">
            <input type="text" value="www.metawarelabs.com"/>
          </div>
          <div className="input-container">
            <input type="text" value="123 Yonge Street"/>
          </div>
          <div className="input-container">
            <input type="text" value="Toronto, ON, Canada"/>
          </div>
          <div className="input-container">
            <input type="text" value="M5S 1B6"/> 
          </div>
        </div>
      </div>
      <div className="items-table">
          <div className="row header">
            <div className="col-xs-1"></div>
            <div className="col-xs-5">Description</div>
            <div className="col-xs-2">Quantity</div>
            <div className="col-xs-2">Cost</div>
            <div className="col-xs-2 text-right">Total</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Head;
