import React from "react";
import Message from "./Message";
import News from "./News";
import { Route } from "react-router-dom";
import MyNavLink from "../../components/MyNavLink";
function Home(props) {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news" class="list-group-item">
              news
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message" class="list-group-item">
              message
            </MyNavLink>
          </li>
        </ul>
      </div>
      <Route path="/home/message" component={Message} />
      <Route path="/home/news" component={News} />
    </div>
  );
}

export default Home;
