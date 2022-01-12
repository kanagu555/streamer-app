import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "../components/streams/StreamCreate";
import StreamDelete from "../components/streams/StreamDelete";
import StreamEdit from "../components/streams/StreamEdit";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";
import history from "../history";

//Your client id: 939885714581-4hmm8t0o9miton8u9qtm26dreggkhq0d.apps.googleusercontent.com

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
