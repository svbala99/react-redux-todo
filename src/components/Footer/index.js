import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";

class Footer extends Component {
  render() {
    return (
      <div
        className="footer column"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="row"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#646464",
              lineHeight: 2,
            }}
          >
            Copyrights 2021. All Rights Reserved.
          </span>
          <span style={{ fontSize: 14, color: "#bdbdbd", lineHeight: 2 }}>
            &nbsp; Balamurugan
          </span>
        </div>
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
      actions: bindActionCreators({}, dispatch),
    })
  )(Footer)
);
