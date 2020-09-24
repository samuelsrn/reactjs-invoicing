import React, { Component } from "react";
import "./style.css";

class ItemsTable extends Component {
  render() {
    return (
      <table className="items-table">
        <tr>
          <th>descreption</th>
          <th>quantity</th>
          <th>cust</th>
        </tr>
        
      </table>
    );
  }
}

export default ItemsTable;
