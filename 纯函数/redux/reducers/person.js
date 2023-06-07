import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{ id: "001", name: "tom", age: 18 }];

export default function personReducer(preState = initState, action) {
  //在reducer中只能写纯函数
  /*纯函数：
	1.不得改写参数数据（preState=xx)
	2.不会产生副作用，例如网络请求，输入和输出设备（防止数据获取不到）
	3.不能调用Date().now或者其他不纯的方法
	*/
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON: //若是添加一个人
      return [data, ...preState];
    default:
      return preState;
  }
}
