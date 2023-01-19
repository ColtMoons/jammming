import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Locos",
          artist: "León Larregui",
          album: "ni idea",
          id: 1,
        },
        {
          name: "Tulipanes",
          artist: "Enjambre",
          album: "No tengo idea",
          id: 2,
        },
        {
          name: "Enamorado tuyo",
          artist: "cuarteto de nos",
          album: "Porfiado",
          id: 3,
        },
        {
          name: "Bailando solo",
          artist: "Los bunkers",
          album: "prueba",
          id: 4,
        },
      ],
      playlistName: "This is a Jammming playlist",
      playlistTracks: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    const isTrackInList = tracks.some(
      (savedTrack) => savedTrack.id === track.id
    );

    if (isTrackInList) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks;
    const newTracks = tracks.filter((savedTrack) => savedTrack.id !== track.id);
    this.setState({ playlistTracks: newTracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
