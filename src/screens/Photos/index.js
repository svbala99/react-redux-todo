import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../redux/actions/photo";
import { bindActionCreators } from "redux";
import PhotoCard from "../../components/PhotoCard";

class PhotosScreen extends Component {
  componentDidMount = () => {
    this.props.actions.fetchPhotos();
  };

  handlefetchUsersClick = () => {
    this.props.actions.fetchPhotos();
    // this.props.history.replace("/");
  };

  handlePhotosClick = () => {
    this.props.history.push("/photos");
  };

  renderPhotos = (photos) => {
    return photos.map((photo) => {
      return <PhotoCard photo={photo} />;
    });
  };

  render() {
    const photos = this.props.photosData.photosArray;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>{`This is Photos screen with ${photos.length} photos`}</h3>
        {photos?.length > 0 && this.renderPhotos(photos)}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    photosData: state.photoReducer,
  }),
  (dispatch) => ({
    actions: bindActionCreators(
      {
        fetchPhotos,
      },
      dispatch
    ),
  })
)(PhotosScreen);
