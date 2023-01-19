import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    const track = this.props.tracks.map((track) => {
      return (
        <Track
          track={track}
          key={track.id}
          isRemoval={this.props.isRemoval}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
        />
      );
    });

    return <div className="TrackList">{track}</div>;
  }
}
