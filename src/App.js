import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import ReserveName from "./components/ReserveName";
import ReserveInfo from "./components/ReserveInfo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DataProvider>
          <div className="App">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/step/1" component={ReserveName} />
              <Route path="/step/2" component={ReserveInfo} />
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
