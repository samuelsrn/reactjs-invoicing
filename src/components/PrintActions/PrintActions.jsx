import React, { Component } from "react";
import "./style.css";

class PrintActions extends Component {

  print_page = () => {
    console.log("Tela printada");
  };
 

  render() {
    return (
      <section>
        <div className="row noPrint actions">
          <button className="btn btn-primary" onClick={this.print_page()}>
            Print
          </button>
          <a className="btn btn-primary">
            Reset
          </a>
          <a className="btn btn-primary">
            Turn On Print Mode
          </a>
          <a className="btn btn-primary">
            Turn Off Print Mode
          </a>
        </div>
      </section>
    );
  }
}

export default PrintActions;
