import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions';
import '../App.css'
import moment from 'moment';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      text : '',
      dueDate: ''
    }
  }

  send(){
    console.log('duedate',this.state.dueDate);
    this.props.kucing(this.state.text,this.state.dueDate);
  }

  sendDelete(id){
    console.log('deleted id ': id);
    this.props.kambing(id);
  }

  renderReminders(){
    const {reminders} = this.props;
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div className="list-item delete-button"
                  onClick={() => this.sendDelete(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    console.log(this.props.reminders);
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline remainder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text : event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={()=>this.send()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    kucing: (text,dueDate) => dispatch(addReminder(text,dueDate)),
    kambing: (id) => dispatch(deleteReminder(id))
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
