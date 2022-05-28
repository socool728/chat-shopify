import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getConversations } from '../../actions/chat.js';
import socketIOClient from 'socket.io-client';

import PropTypes from 'prop-types';

const UseSidebar = (props) => {
  const [conversations, setConversations] = useState([]);
  const [newConversation, setNewConversation] = useState(null);

  const handleRecipient = (recipients) => {
    for (let i = 0; i < recipients.length; i++) {
      if (recipients[i] !== props.auth.user_id) {
        return recipients[i];
      }
    }
    return null;
  };

  useEffect(() => {
    getConversations(props.auth.user._id).then((req) =>
      setConversations(req.data)
    );
  }, [newConversation]);
  useEffect(() => {
    let socket = socketIOClient('/');
    socket.on('messages', (data) => setNewConversation(data));

    return () => {
      socket.removeListener('messages');
    };
  }, []);
  return (
    <div id="sidepanel">
      <div id="profile">
        <div className="wrap">
          <img
            id="profile-img"
            src={props.auth.user.avatar}
            className="online"
            alt=""
          />
          <p>
            {props.auth.user.first_name + ' ' + props.auth.user.second_name}
          </p>
          <i
            className="fa fa-chevron-down expand-button"
            aria-hidden="true"
          ></i>
          <div id="status-options">
            <ul>
              <li id="status-away">
                <span className="status-circle"></span>
                <p>Away</p>
              </li>
              <li id="status-busy">
                <span className="status-circle"></span>
                <p>Busy</p>
              </li>
              <li id="status-offline">
                <span className="status-circle"></span>
                <p>Offline</p>
              </li>
            </ul>
          </div>
          <div id="expanded">
            <label for="twitter">
              <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
            </label>
            <input name="twitter" type="text" value="mikeross" />
            <label for="twitter">
              <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
            </label>
            <input name="twitter" type="text" value="ross81" />
            <label for="twitter">
              <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
            </label>
            <input name="twitter" type="text" value="mike.ross" />
          </div>
        </div>
      </div>
      <div id="search">
        <label for="">
          <i className="fa fa-search" aria-hidden="true"></i>
        </label>
        <input type="text" placeholder="Search contacts..." />
      </div>
      <div id="contacts">
        <ul>
          {conversations &&
            conversations.map((c) => (
              <li
                key={c._id}
                className="contact active"
                onClick={() => {
                  props.setUser(handleRecipient(c.recipientObj));
                  props.setScope(
                    handleRecipient(c.recipientObj).first_name +
                      ' ' +
                      handleRecipient(c.recipientObj).second_name
                  );
                }}
              >
                <div className="wrap">
                  {/* <span></span> */}
                  <img src={handleRecipient(c.recipientObj).avatar} alt="" />
                  <div className="meta">
                    <p className="name">
                      {handleRecipient(c.recipientObj).first_name +
                        ' ' +
                        handleRecipient(c.recipientObj).second_name}
                    </p>
                    <p className="preview">{c.lastMessage}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div id="bottom-bar">
        <button id="addcontact">
          <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>
          <span>Add contact</span>
        </button>
        <button id="settings">
          <i className="fa fa-cog fa-fw" aria-hidden="true"></i>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

UseSidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getConversations })(UseSidebar);
