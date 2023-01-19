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
          name: "lovely night",
          artist: "Ryan and Emma",
          album: "Lalaland",
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
          name: "Hey",
          artist: "no",
          album: "prueba",
          id: 4,
        },
      ],
      playlistName: "This is a Jammming playlist",
      playlistTracks: [
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
      ],
    };
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
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
