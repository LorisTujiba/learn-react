import React,{Component} from 'react'

class Gallery extends Component{
  constructor(props){
    super(props);
    this.state= {
      playingUrl: '',
      audio: null,
      playing: false
    }
  }

  playAudio(url){
    let audio = new Audio(url);
    if(!this.state.playing){
        audio.play();
        this.setState({
          playing: true,
          playingUrl: url,
          audio
        })
    }else{
      if(this.state.playingUrl === url){
        this.state.audio.pause();
        this.setState({playing:false})
      }else{
        this.state.audio.pause()
        audio.play();
        this.setState({
          playing: true,
          playingUrl: url,
          audio
        })
      }
    }

  }

  render(){
    const { tracks } = this.props;
    return(
      <div>
          {
            tracks.map((track,index)=>{
              const trackImg = track.album.images[0].url;
              return(
              <div
                key={index}
                className="Track"
                onClick={() => this.playAudio(track.preview_url)}>
                  <img
                    src={trackImg}
                    className="Track-img"
                    alt="Track"
                  />
                  <div className="Track-play">
                    <div className="Track-play-inner">
                      {
                        track.preview_url !==null
                        ?
                          this.state.playingUrl === track.preview_url
                          ? <span>| |</span>
                          : <span>&#9654;</span>
                        : ' '                        
                      }
                    </div>
                  </div>
                  <div
                    className="Track-title">
                    {track.name}
                  </div>
              </div>
              )
            })
          }
      </div>
    )
  }
}

export default Gallery;
