import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      query : '',
      artist:null
    }
  }

  search(){
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' + this.state.query
                      + '&type=artist&limit=1';

    var accessToken = 'BQAqiYbugsAR4KYmqO_zC7QD5iysZKXF52NB6Yo105dlqWh_W3aiXbVspIvKZxe5qblacI42pPs8OtRslmb6jtFr1ISldateOK6vKe9zVKK5nyFSnbDMOTvIAzYhhNV14SagaRyTxgLPdnGbh-g7Qt1uklhl6J3h9S4So0OZ-6mbBSpvjv4'
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
            <div><Profile artist={this.state.artist}/>
            <div className="Gallery"></div></div>
          :
            ''
        }



      </div>
    )
  }
}

export default App;
