import React, { Component } from "react";
import "./index.css";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import Head from "./components/Head";
import PrintActions from "./components/PrintActions";
import ItemsTotal from "./components/ItemsTotal";

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
        <Head />
        <Items
          Items={this.state.items}
          onClickRemoveItems={this.onClickRemoveItems}
          updateItem={this.updateItem}
        />
        <AddItems onClick={this.onClickAddItems} />
        <PrintActions />
        <ItemsTotal />
      </div>
    );
  }
}

export default App;
