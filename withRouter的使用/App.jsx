import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import { Button, ConfigProvider } from "antd";
import "antd/dist/reset.css";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00b96b",
                },
              }}
            >
              <Button type="primary">click</Button>
            </ConfigProvider>
            <Header></Header>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
            <MyNavLink to="/test">Test</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/home" component={Test} />
                <Redirect to="/about"></Redirect>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
