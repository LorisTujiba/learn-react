import React, {Component} from 'react';
import {connect} from 'react-redux';
import { goalRef } from '../firebase';
import {setGoals} from  '../actions';

class GoalItem extends Component{
  render(){
    const{ email, title} = this.props.goal;
    return(
      <div>
        <strong>{title}</strong>
        <span>by <em>{email}</em></span>
      </div>
    )
  }
}

export default GoalItem;
