import React, { Component } from "react";
import "./style.css";

class AddItems extends Component {
  render() {
    return (
      <section>
        <div className="row invoice-item">
          <div className="col-xs-12 add-item-container">
            <button className="btn btn-primary" onClick={this.props.onClick}>
              [+]
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default AddItems;
