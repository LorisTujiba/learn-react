import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query : '',
      artist:null,
      tracks:[]
    }
  }

  search(){
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    let FETCH_URL = BASE_URL + 'q=' + this.state.query
                      + '&type=artist&limit=1';
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';

    var accessToken = 'BQCsY4pg5a7T8yZOvAD7ANyoWZDGOqCmOrVp3ghsmL0PF3mVbJ3EcuIHf9mBKu7cuiMSq-hdSyrqKDTNQjXwVNMwEXarAMROUvYZNwwUS43lw0a2vRzuZ7fNuloVqyvxPaYFN5r6oeszThr_3DuNDirKgPkI2KgEWX1rxVsw0icYDu_pz2E'
    var myOpt = {
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer ' + accessToken
      },
      mode : 'cors',
      cache: 'default'
    }

    fetch(FETCH_URL, myOpt)
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      console.log(artist)
      this.setState({artist});

      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
      fetch(FETCH_URL,myOpt)
      .then(response => response.json())
      .then(json => {
        const { tracks } = json;
        console.log(tracks)
        this.setState({tracks});
      })

    })
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
              <FormControl
                type="text"
                placeholder="Search an artist . . ."
                value = {this.state.query}
                onChange = {event => this.setState({query: event.target.value})}
                onKeyPress={event => {
                  if(event.key === 'Enter'){
                    this.search()
                  }
                }}
              />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
          </InputGroup>
        </FormGroup>

        {
          this.state.artist !== null
          ?
            <div>
              <Profile artist={this.state.artist}/>
              <Gallery tracks={this.state.tracks}/>
            </div>
          :
            <div></div>
        }
      </div>
    )
  }
}

export default App;
