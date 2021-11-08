import React from "react";
class UserCard extends React.Component {
  render() {
    const { user, bgcolor = "grey" } = this.props;
    return (
      <div
        style={{
          width: 300,
          height: 150,
          backgroundColor: `#${bgcolor}`,
          border: "2px solid grey",
          padding: 16,
          margin: 8,
        }}
      >
        <h4>{user?.name || "Name here"}</h4>
        <h6>{user?.phone || "Pshone number here"}</h6>
      </div>
    );
  }
}

export default UserCard;
