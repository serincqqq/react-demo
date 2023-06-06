import React from "react";
import { withRouter } from "react-router-dom";
function Header(props) {
  const back = () => {
    props.history.goBack();
  };
  return (
    <div className="page-header">
      <button onClick={back}>回退</button>
    </div>
  );
}
export default withRouter(Header);
