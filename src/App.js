import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Reserve from "./components/Reserve";
import FinalResult from "./components/FinalResult";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DataProvider>
          <div className="App">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/reserve" component={Reserve} />
              <Route path="/result" component={FinalResult} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </DataProvider>
      </BrowserRouter>
    );
  }
}

function Home() {
  return <div />;
}

export default App;
