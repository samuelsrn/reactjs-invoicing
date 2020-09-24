import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemsTable from "./components/ItemsTable"


class App extends Component {
  render() {
    return(
    <section className="App">
      <ItemsTable descreption="" quantity="" cust="" />
    </section>    
    );
  }
}

export default App;
