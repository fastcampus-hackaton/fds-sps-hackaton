import React, { Component } from "react";
import { BrowserRouter, Route } from "react";
import { DataProvider } from "./contexts/DataConctext";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DataProvider>
          <div className="App">
            <Route exact path="/" componet={Home} />
            <Route path="/home" componet={Home} />
            <Route path="/step/1" componet={Step1} />
          </div>
        </DataProvider>
      </BrowserRouter>
    );
  }
}

export default App;
