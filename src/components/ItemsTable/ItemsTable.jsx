import React, { Component } from "react";
import Items from "../Items";
import AddItems from "../AddItems";
import "./style.css";

class ItemsTable extends Component {
  render() {
    return (
      <section>
        <table className="items-table">
          <tr>
            <th></th>
            <th>descreption</th>
            <th>quantity</th>
            <th>cust</th>
            <th>Total</th>
          </tr>
          <Items />
          <AddItems/>
        </table>
      </section>
    );
  }
}

export default ItemsTable;
