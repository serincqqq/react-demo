import { connect } from "react-redux";
import CountUI from "../../components/Count";
import { Increment, Decrement, IncrementAsync } from "../../redux/actions/count";

export default connect(
  (state) => ({
    count: state.count,
    personCount: state.persons.length,
  }),
  { Increment, Decrement, IncrementAsync }
)(CountUI);
