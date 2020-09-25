import React, { Component } from "react";

import "./style.css";

class HeaderTable extends Component {
  render() {
    return (
      <tr>
        <th class="col-xs-1 add-item-container"></th>
        <th class="col-xs-1 add-item-container">descreption</th>
        <th class="col-xs-1 add-item-container">quantity</th>
        <th class="col-xs-1 add-item-container">cust</th>
        <th class="col-xs-1 add-item-container">Total</th>
      </tr>
    );
  }
}

export default HeaderTable;
