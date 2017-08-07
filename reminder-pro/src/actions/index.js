import { ADD_REMINDER, DELETE_REMINDER } from '../constant';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log(action);
  return action;
}

export const deleteReminder = (id) =>{
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log(action)
  return action;
}
