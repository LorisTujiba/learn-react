import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      email :'',
      password:'',
      err:{
        message:''
      }
    }
  }

  signUp(){
    console.log(this.state);
    const {email,password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
      .catch(err => {
        this.setState({err})
      })
  }

  render(){
    return(
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={()=>this.signUp()}
          >
            Sign Up
          </button>
        </div>
        <div>{this.state.err.message}</div>
        <div><Link to={'/signin'}>Sign In instead</Link></div>
      </div>
    )
  }
}

export default SignUp;
