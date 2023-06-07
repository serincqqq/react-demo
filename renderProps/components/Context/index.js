import React from "react";
import "./index.css";

export default function Parent() {
  return (
    <div className="parent">
      <h3>我是Parent组件</h3>
      <A render={(name) => <B name={name} />} />
    </div>
  );
}

function A(props) {
  return (
    <div className="a">
      <h3>我是A组件</h3>
      {props.render("tom")}
    </div>
  );
}

function B(props) {
  console.log("B--render");
  return (
    <div className="b">
      <h3>我是B组件,{props.name}</h3>
    </div>
  );
}
