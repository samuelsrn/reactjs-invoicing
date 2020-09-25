import React, { Component } from "react";
import "./style.css";

class AddItems extends Component {
  render() {
    return (
      <tr>
        <td class="col-xs-1 add-item-container">
          <button class="btn btn-primary" type="submit" value="" onClick={this.props.onClick}>
            [+]
          </button>
        </td>
        <td class="col-xs-5 add-item-container"></td>
        <td class="col-xs-2 add-item-container"></td>
        <td class="col-xs-1 add-item-container"></td>
        <td class="col-xs-1 add-item-container"></td>
      </tr>
    );
  }
}

export default AddItems;
