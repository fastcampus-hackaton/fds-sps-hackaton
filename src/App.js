import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";

// import StandardResultPage from "./pages/StandardResultPage";
import ReserveNamePage from "./pages/ReserveNamePage";
import ReserveInfoPage from "./pages/ReserveInfoPage";
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
              <Route path="/reserve/1" component={ReserveNamePage} />
              <Route path="/reserve/2" component={ReserveInfoPage} />
              {/* <Route path="/result" component={StandardResultPage} /> */}
              <Route path="/oresult" component={OptionResultPage} />
              <Route path="/edu/:eduId" component={ViewContents} />
              <Route exact path="/" component={StartHomePage} />
            </Switch>
          </div>
        </DataProvider>
      </BrowserRouter>
    );
  }
}

const ViewContents = ({ match }) => {
  console.log(match);
  return <VideoResultPage contentsId={match.params.eduId} />;
};

export default App;
