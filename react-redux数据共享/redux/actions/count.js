import { INCREMENT, DECREMENT } from "../constant";
import store from "../store";
export const Increment = (data) => ({ type: INCREMENT, data });
export const Decrement = (data) => ({ type: DECREMENT, data });
export const IncrementAsync = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(Increment(data));
    }, time);
  };
};
