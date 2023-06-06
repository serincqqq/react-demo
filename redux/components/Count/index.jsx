import React, { Component } from "react";
//引入store获取状态
import store from "../../redux/store";
import { Increment, Decrement, IncrementAsync } from "../../redux/count_action";
export default class Count extends Component {
  state = { carName: "car" };
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  //加法
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(Increment(value));
  };
  //减法
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(Decrement(value));
  };
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(Increment(count + value * 1));
    }
  };
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    store.dispatch(IncrementAsync(count + value * 1, 500));
  };

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}
