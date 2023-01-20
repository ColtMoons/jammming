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
          uri: "thisisaproofspotify",
        },
        {
          name: "Tulipanes",
          artist: "Enjambre",
          album: "No tengo idea",
          id: 2,
          uri: "hey",
        },
        {
          name: "Enamorado tuyo",
          artist: "cuarteto de nos",
          album: "Porfiado",
          id: 3,
          uri: "testing",
        },
        {
          name: "Bailando solo",
          artist: "Los bunkers",
          album: "prueba",
          id: 4,
          uri: "urlprueba",
        },
      ],
      playlistName: "New Playlist",
      playlistTracks: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(savedTrack => savedTrack.uri);
  }

  search(searchTerm){
    console.log(searchTerm);
  }


  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
