import api from '../utils/api';
import { setAlert } from './alert';
import { MESSAGE_SUCCESS, MESSAGE_FAIL } from './types';

// Get list of users conversations
export const getConversations = (id) => {
  try {
    const res = api.get(`/messages/conversations?Id=${id}`);
    return res;
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => setAlert(error.msg, 'danger'));
    }

  }
};

// get conversation messages based on
// to and from id's
export const getConversationMessages = (to_id, from_id) => {
  try {
    const res = api.get(
      `/messages/conversations/query?fromId=${from_id}&toId=${to_id}`
    )
    return res;
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => setAlert(error.msg, 'danger'));
    }
    return errors;
  }
};

export const sendConversationMessage = (from_id, to_id, message) => {
  try {
    const formdata = { from: from_id, to: to_id, body: message };
    const res = api.post('/messages', formdata);
    return res;
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => setAlert(error.msg, 'danger'));
    }
  }
};
