import { INCREMENT, DECREMENT } from "../constant";
const initState = 0;
export default function countReducer(preState = initState, action) {
  if (preState === undefined) preState = 0;
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + Number(data);
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
