import React, { useState } from "react";
import axios from "axios";
function Search(props) {
  const [keyWordElement, setKeyWordElement] = useState("");
  const search = () => {
    props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`/api1/search/users?q=${keyWordElement}`).then(
      (response) => {
        //请求成功后通知App更新状态
        console.log("response", response);
        props.updateAppState({ isLoading: false, users: response.data.items });
      },
      (error) => {
        //请求失败后通知App更新状态
        props.updateAppState({ isLoading: false, err: error.message });
        console.log("error", error);
      }
    );
  };
  const handleCnhange = (e) => {
    const value = e.target.value;
    setKeyWordElement(value);
  };
  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">搜索github用户</h3>
      <div>
        <input type="text" onChange={handleCnhange} value={keyWordElement} placeholder="输入关键词点击搜索" />
        &nbsp;
        <button onClick={search}>搜索</button>
      </div>
    </section>
  );
}

export default Search;
