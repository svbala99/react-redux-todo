import React from "react";
class PhotoCard extends React.Component {
  render() {
    const { photo } = this.props;
    return (
      <div
        style={{
          width: 150,
          height: 150,
          border: "2px solid grey",
          backgroundImage: `url(${photo?.thumbnailUrl})`,
          padding: 16,
          margin: 8,
        }}
      >
        <h6>{photo?.title || "Titles here"}</h6>
      </div>
    );
  }
}

export default PhotoCard;
