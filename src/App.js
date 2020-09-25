import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemsTable from "./components/ItemsTable"


class App extends Component {
  render() {
    return(
    <div className="items-table">
      <ItemsTable descreption="" quantity="" cust="" />
    </div>    
    );
  }
}

export default App;
