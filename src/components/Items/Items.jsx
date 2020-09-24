import React, { Component } from "react";
import "./style.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.descreption = "";
    this.quantity = "";
    this.cust = "";
    this.total = "";
  }

  _insert_descreption(event) {
    this.descreption = event.target.value;
    console.log(this.descreption);
  }

  _insert_quantity(event){
    this.quantity = event.target.value;
    console.log(this.descreption);
  }

  _insert_cust(event){
    this.cust = event.target.value;
    console.log(this.descreption);
  }

  

  render() {
    return (
      <tr>
        <td>
          <button type="submit" onSubmit="">
            [x]
          </button>
        </td>
        <td>
          <input
            type="text"
            placeholder="descreption"
            onChange={this._insert_descreption.bind(this)}
          ></input>
        </td>
        <td>
          <input
            type="text"
            placeholder="quantity"
            onChange={this._insert_quantity.bind(this)}
          ></input>
        </td>
        <td>
          <input
            type="text"
            placeholder="cust"
            onChange={this._insert_cust.bind(this)}
          ></input>
        </td>
    <td>{this.total}</td>
      </tr>
    );
  }
}

export default Items;
