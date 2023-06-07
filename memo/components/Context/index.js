import React, { useState } from "react";
import "./index.css";
/*
父组件引起的重新渲染一直都是存在的，如果一个父组件发生了重新渲染，
它的子组件也会发生重新渲染。
但是在函数组件中，我们不能使用 shouldComponentUpdate 或 PureComponent 去解决这些问题。

但是，我们可以使用 React.memo，它是 React 提供的一个高阶组件。
在 props 方面，它的功能和 PureComponent 完全一致：
当某个子组件被 React.memo 包裹时，该子组件只在 props 发生变化时才进行重新渲染，s
而父组件的重新渲染并不会触发该子组件重新渲染。
 */
export default function A() {
  console.log("render-A");
  const [car, setCar] = useState("benchi");
  const changeCar = () => {
    setCar("maibahe");
  };

  return (
    <div>
      <h4>{car}</h4>
      <button onClick={changeCar}>click</button>
      {/* <B car={car}></B> */}
      <PureChild someprop="123"></PureChild>
    </div>
  );
}
function B({ someprop }) {
  console.log("render-B");
  return (
    <div>
      <h4>child</h4>
      <h4>{someprop}</h4>
      {/* <h4>{props.car}</h4> */}
    </div>
  );
}
export const PureChild = React.memo(B);
