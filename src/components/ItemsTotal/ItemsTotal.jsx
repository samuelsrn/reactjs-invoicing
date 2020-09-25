import React, { Component } from "react";
import "./style.css";

class ItemsTotal extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col-xs-10 text-right">Sub Total</div>
          <div className="col-xs-2 text-right"></div>
        </div>
        <div className="row">
          <div className="col-xs-10 text-right">
            <input></input>
          </div>
          <div className="col-xs-2 text-right"></div>
        </div>
        <div className="row">
          <div className="col-xs-10 text-right">Grand Total:</div>
          <div className="col-xs-2 text-right"></div>
        </div>
      </section>
    );
  }
}

export default ItemsTotal;
