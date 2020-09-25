import React, { Component } from "react";
import Total from "../Total";
import "./style.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.descreption = "";
  }

  _insert_descreption(event) {
    this.descreption = event.target.value;
  }

  _insert_quantity = (position, value) => {
    let items = this.props.Items;
    items[position].quantity = value;
    this.props.updateItem(position, items[position]);
    this.calc_total(position);
  };

  _insert_cust = (position, value) => {
    let items = this.props.Items;
    items[position].cust = value;
    this.props.updateItem(position, items[position]);
    this.calc_total(position);
  };

  calc_total = (position) => {
    let items = this.props.Items;
    items[position].total =
      parseFloat(items[position].quantity) * parseFloat(items[position].cust);
    this.props.updateItem(position, items[position]);
  };

  render() {
    return (
      <div>
        {this.props.Items.map((item, index) => {
          return (
            <tr>
              <td class="col-xs-1 add-item-container">
                <button
                  class="btn btn-danger"
                  type="submit"
                  onClick={() => this.props.onClickRemoveItems(index)}
                >
                  [x]
                </button>
              </td>
              <td class="col-xs-1 add-item-container">
                <input
                  type="text"
                  placeholder="descreption"
                  onChange={this._insert_descreption.bind(this)}
                ></input>
              </td>
              <td class="col-xs-1 add-item-container">
                <input
                  type="text"
                  placeholder="quantity"
                  onChange={(event) =>
                    this._insert_quantity(index, event.target.value)
                  }
                ></input>
              </td>
              <td class="col-xs-1 add-item-container">
                <input
                  type="text"
                  placeholder="cust"
                  position={index}
                  onChange={(event) =>
                    this._insert_cust(index, event.target.value)
                  }
                ></input>
              </td>
              <td>{item.total}</td>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default Items;
