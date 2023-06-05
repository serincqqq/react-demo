import React, { useState } from "react";
import Search from "./components/Search";
import List from "./components/List";
function App() {
  const [state, setState] = useState(
    //初始化状态
    {
      users: ["1"], //users初始值为数组
      isFirst: true, //是否为第一次打开页面
      isLoading: false, //标识是否处于加载中
      err: "", //存储请求相关的错误信息
    }
  );
  const updateAppState = (stateObj) => {
    setState(stateObj);
  };
  return (
    <div className="container">
      <Search updateAppState={updateAppState} />
      <List state={state} />
    </div>
  );
}

export default App;
