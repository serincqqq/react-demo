//import store from "../../redux/store";
import { connect } from "react-redux";
import CountUI from "../../components/Count";
import { Increment, Decrement } from "../../redux/count_action";
// function mapStateToProps(state) {
//   return { count: state };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (number) => {
//       dispatch(Increment(number));
//     },
//     jian: (number) => dispatch(Decrement(number)),
//   };
// }

export default connect((state) => ({ count: state }), { jia: Increment, jian: Decrement })(CountUI);
