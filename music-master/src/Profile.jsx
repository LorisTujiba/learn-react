import React, {Component} from 'react';

class Profile extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props)
    //If you use an api, ensure that the var container has the same properties
    //such as this artist object has a name, followers and an array of objects
    //that has url properties. Name it the same so you dont have to define
    //it one by one
    let artist = {
      name:'',
      followers: {
        total:''
      },
      images:[
        {url:''}
      ],
      genres:[]
    };

    if(this.props.artist !== null){
      artist = this.props.artist;
    }

    return(
      <div className="Profile">
        <img
          alt="Profile"
          className="Profile-img"
          src={artist.images[0].url}
        />
        <div className="Profile-info">
          <div className="Profile-name">{artist.name}</div>
          <div className="Profile-followers">
            {artist.followers.total} followers
          </div>
          <div>
            {/*map function need to return the jsx*/}
            {
              artist.genres.map((genre, index)=>{
                {/*if the genre is not the last of the list add space and comma
                  else, add ampersand*/}
                genre = genre !== artist.genres[artist.genres.length-1]
                        ? ' '+ genre + ','
                        : ' & '+genre
                return(
                  <span key={index}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
