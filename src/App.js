import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderTable from "./components/HeaderTable";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import Head from "./components/Head";

class App extends Component {
  constructor(props) {
    super(props);
    this.descreption = "";
    this.state = {
      items: [
        {
          quantity: 0,
          cust: 0,
          total: "",
        },
      ],
    };
  }

  updateItem = (pos, value) => {
    let items = this.state.items;
    items[pos] = value;

    this.setState({
      items,
    });
  };

  onClickAddItems = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          quantity: 0,
          cust: 0,
          total: "",
        },
      ],
    });
  };

  onClickRemoveItems = (pos) => {
    let items = this.state.items;

    items.splice(pos, 1);

    this.setState({
      items,
    });
  };

  render() {
    return (
      <div class="container" width="800px" id="invoice">
        <table>
          <Head />
          <HeaderTable />
          <Items
            Items={this.state.items}
            onClickRemoveItems={this.onClickRemoveItems}
            updateItem={this.updateItem}
          />
          <AddItems onClick={this.onClickAddItems} />
        </table>
      </div>
    );
  }
}

export default App;
