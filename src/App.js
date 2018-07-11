import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
import Reserve from "./components/Reserve";

import StandardResultPage from "./pages/StandardResultPage";
import OptionResultPage from "./pages/OptionResultPage";
import VideoResultPage from "./pages/VideoResultPage";
import StartHomePage from "./pages/StartHomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DataProvider>
          <div className="App">
            <Switch>
              <Route path="/home" component={StartHomePage} />
              <Route path="/reserve" component={Reserve} />
              <Route path="/result" component={StandardResultPage} />
              <Route path="/oresult" component={OptionResultPage} />
              <Route path="/vresult" component={VideoResultPage} />
              <Route exact path="/" component={StartHomePage} />
            </Switch>
          </div>
        </DataProvider>
      </BrowserRouter>
    );
  }
}

export default App;
