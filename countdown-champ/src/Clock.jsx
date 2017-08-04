import React,{Component} from 'react'
import './App.css'

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours : 0,
      minutes :0,
      seconds:0
    }
  }

  /*
  Lifecyle hooks
  --------------
  componentWillMount() is invoked immediately before mounting occurs.
  It is called before render(), therefore setting state
  synchronously in this method will not trigger a
  re-rendering. Avoid introducing any
  side-effects or subscriptions in
  this method.
  */
  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }

  /*
  Lifecyle hooks
  --------------
  componentDidMount() is invoked immediately after a component is mounted.
  Initialization that requires DOM nodes should go here. If you need
  to load data from a remote endpoint, this is a good place to
  instantiate the network request. Setting state in this
  method will trigger a re-rendering.
  */
  componentDidMount(){
    setInterval(()=>this.getTimeUntil(this.props.deadline),1000)
  }

  leading0(num){
    if(num < 10 ){
      return '0'+num;
    }
    return num;
    //return num < 10 ? '0' + name : num;
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({days:days,hours:hours,minutes,seconds:seconds})
  }

  render(){
    return (
      <div>
        <div className="Clock-info">{this.leading0(this.state.days)} days</div>
        <div className="Clock-info">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-info">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-info">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
