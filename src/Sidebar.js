import React from "react";
import { connect } from "react-redux";
import { addAuthor } from "./actions";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button className="btn btn-block btn-light" onClick={props.addAuthor}>
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    newAuthId: state.newAuthorId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: () => dispatch(addAuthor())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
