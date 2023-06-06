import React from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";
function Message(props) {
  const messageArr = [
    { id: "01", title: "消息1" },
    { id: "02", title: "消息2" },
    { id: "03", title: "消息3" },
  ];

  return (
    <div>
      <ul>
        {messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              <Link to={{ pathname: "/home/message/detail/", state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 声明接收params参数 */}
      <Route path="/home/message/detail" component={Detail} />
    </div>
  );
}

export default Message;
