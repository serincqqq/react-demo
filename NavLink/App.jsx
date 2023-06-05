import React from "react";
import { Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
