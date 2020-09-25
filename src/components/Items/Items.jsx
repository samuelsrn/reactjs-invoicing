import React, { Component } from "react";
import "./style.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.descreption = "";
    this.state = {
      quantity: 0,
      cust: 0,
      total: "",
    };
  }

  _insert_descreption(event) {
    this.descreption = event.target.value;
  }

  _insert_quantity(event) {
    this.state.quantity = event.target.value;
  }

  _insert_cust(event) {
    this.state.cust = event.target.value;
  }

  calc_total() {
    const total = parseFloat(this.state.quantity) * parseFloat(this.state.cust);
    console.log(total);
  }

  render() {
    return (
      <tr>
        <td class="col-xs-1 input-container">
          <button
            class="btn btn-danger"
            type="submit"
            onClick={this.calc_total.bind(this)}
          >
            [x]
          </button>
        </td>
        <td class="col-xs-5 input-container">
          <input
            type="text"
            placeholder="descreption"
            onChange={this._insert_descreption.bind(this)}
          ></input>
        </td>
        <td class="col-xs-2 input-container">
          <input
            type="text"
            placeholder="quantity"
            onChange={this._insert_quantity.bind(this)}
          ></input>
        </td>
        <td class="col-xs-1 input-container">
          <input
            type="text"
            placeholder="cust"
            onChange={this._insert_cust.bind(this)}
          ></input>
        </td>
        <td class="col-xs-1 input-container"></td>
      </tr>
    );
  }
}

export default Items;
