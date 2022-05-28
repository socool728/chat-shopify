import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import setAuthToken from '../../utils/setAuthToken';

import {
  getConversationMessages,
  sendConversationMessage
} from '../../actions/chat.js';
import { MESSAGE_SUCCESS } from '../../actions/types';

const ChatBox = (props) => {
  setAuthToken(localStorage.token);

  const currentUserId = props.auth.user._id;
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);

  let chatBottom = useRef(null);

  useEffect(() => {
    reloadMessages();
    scrollToBottom();
  }, [lastMessage, props.scope, props.conversationId]);

  useEffect(() => {
    const socket = socketIOClient('/');
    socket.on('messages', (data) => setLastMessage(data));
  }, []);

  const reloadMessages = () => {
    if (props.scope !== null && props.conversationId !== null) {
      getConversationMessages(props.user._id, props.auth.user._id).then(
        (req) => {
          setMessages(req.data);
        }
      );
    } else {
      setMessages([]);
    }
  };

  const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendConversationMessage(
      props.auth.user._id,
      props.user._id,
      newMessage
    ).then((res) => {
      setNewMessage('');
    });
  };

  return (
    <div className="content container">
      <div className="contact-profile">
        <img src={props.user.avatar} alt="" />
        <p>{props.scope}</p>
        <div className="social-media">
          <i className="fa fa-facebook" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
        </div>
      </div>

      <div className="messages">
        <ul>
          {messages &&
            messages.map((m) => (
              <li key={m._id} className="sent">
                <img src={props.user.avatar} alt="" />
                <pre>
                  {m.body}
                  <br />
                  <small>{m.date}</small>
                </pre>
              </li>
            ))}
          <li ref={chatBottom} style={{ padding: '40px' }}></li>
        </ul>
      </div>

      <div className="chat-footer">
        <div
          className="dz-preview"
          id="dz-preview-row"
          data-horizontal-scroll=""
        />
        <form
          className="chat-form rounded-pill bg-light row"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <i
              className="fas fa-paperclip"
              style={{
                fontSize: '2em',
                marginLeft: '10px',
                marginRight: '10px',
                marginTop: '8px',
                color: '#435f7a'
              }}
            />
            <textarea
              className="form-color"
              placeholder="Type your message..."
              rows="1"
              id="message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            <button className="send" type="submit">
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ChatBox.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { sendConversationMessage })(ChatBox);
