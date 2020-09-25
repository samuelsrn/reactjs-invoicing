import React, { Component } from "react";
import Items from "../Items";
import AddItems from "../AddItems";
import "./style.css";

class ItemsTable extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th class="col-xs-1"></th>
            <th class="col-xs-1">descreption</th>
            <th class="col-xs-1">quantity</th>
            <th class="col-xs-1">cust</th>
            <th class="col-xs-1">Total</th>
          </tr>
          <Items />
          <AddItems/>
        </table>
      </div>
    );
  }
}

export default ItemsTable;
