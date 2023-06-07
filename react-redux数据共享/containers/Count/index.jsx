import { connect } from "react-redux";
import CountUI from "../../components/Count";
import { Increment, Decrement } from "../../redux/actions/count";

export default connect(
  (state) => ({
    count: state.he,
    renshu: state.rens.length,
  }),
  { jia: Increment, jian: Decrement }
)(CountUI);
