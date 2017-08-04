import React,{Component} from 'react';
import './App.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      seconds :0
    }
  }

  start(){
    setInterval(()=>this.processTime(this.state.seconds),1000)
  }

  processTime(input){
    if(input > 0)
    {
        input--;
    }else{
      alert("Done!");
    }
    this.setState({seconds : input})
  }

  leading0(num){
    return num < 10 ? "0"+num : num
  }

  render(){
    return(
        <div className="App">
          <div>
            <span>{this.leading0(this.state.seconds)}</span>
          </div>
          <div>
            <input placeholder="Input time" onChange={event=>this.setState({seconds:event.target.value})}/>
            <button onClick = {() => this.start()}>
              Start
            </button>
          </div>
        </div>
    )
  }
}

export default App;
