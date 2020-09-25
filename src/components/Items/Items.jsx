import React, { Component } from "react";
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
            <section>
              <div className="row invoice-item">
                <div className="col-xs-1 remove-item-container">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.onClickRemoveItems(index)}
                  >
                    [X]
                  </button>
                </div>
                <div className="col-xs-5 input-container">
                  <input
                    placeholder="Description"
                    onChange={this._insert_descreption.bind(this)}
                  />
                </div>
                <div className="col-xs-2 input-container">
                  <input
                    size="4"
                    placeholder="Quantity"
                    onChange={(event) =>
                      this._insert_quantity(index, event.target.value)
                    }
                  />
                </div>
                <div className="col-xs-2 input-container">
                  <input
                    size="6"
                    placeholder="Cost"
                    onChange={(event) =>
                      this._insert_cust(index, event.target.value)
                    }
                  />
                </div>
                <div className="col-xs-2 text-right input-container">{item.total}</div>
              </div>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Items;
