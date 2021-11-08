import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/actions/user";
import { bindActionCreators } from "redux";
import UserCard from "../../components/UserCard";

class HomeScreen extends Component {
  handlefetchUsersClick = () => {
    this.props.actions.fetchUsers();
    // this.props.history.replace("/");
  };

  handlePhotosClick = () => {
    this.props.history.push("/photos");
  };

  renderUsers = (users) => {
    return users.map((user) => {
      return (
        <UserCard
          user={user}
          bgcolor={Math.floor(Math.random() * 16777215).toString(16)}
        />
      );
    });
  };

  render() {
    const users = this.props.userData.usersArray;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>{`This is Home screen with ${users.length} users`}</h3>
        {users?.length > 0 && this.renderUsers(users)}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userData: state.userReducer,
  }),
  (dispatch) => ({
    actions: bindActionCreators(
      {
        fetchUsers,
      },
      dispatch
    ),
  })
)(HomeScreen);
