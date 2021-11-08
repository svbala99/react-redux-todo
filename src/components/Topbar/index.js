import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions/user";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

class TopBar extends Component {
  handlefetchUsersClick = () => {
    this.props.actions.fetchUsers();
    this.props.history.replace("/");
    // this.props.history.replace("/");
  };

  handlePhotosClick = () => {
    this.props.history.push("/photos");
  };

  render() {
    const { users } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h4>{"Sample App"}</h4>
        <button onClick={this.handlefetchUsersClick}>{"Fetch Users"}</button>
        <button onClick={this.handlePhotosClick}>{"Goto Photos"}</button>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({
      users: state.users,
    }),
    (dispatch) => ({
      actions: bindActionCreators(
        {
          fetchUsers,
        },
        dispatch
      ),
    })
  )(TopBar)
);
