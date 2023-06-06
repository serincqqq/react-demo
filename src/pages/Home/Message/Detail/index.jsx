import React from "react";
import qs from "querystring";

const DetailData = [
  { id: "01", content: "你好，中国" },
  { id: "02", content: "你好，尚硅谷" },
  { id: "03", content: "你好，未来的自己" },
];
function Detail(props) {
  console.log("pp", props);
  const { search } = props.location;
  const { id, title } = qs.parse(search.slice(1));

  const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id;
  });
  return (
    <ul>
      <li>ID:{id}</li>
      <li>TITLE:{title}</li>
      <li>CONTENT:{findResult.content}</li>
    </ul>
  );
}

export default Detail;
