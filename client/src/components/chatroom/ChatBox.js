import React from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatBox = () => {
  return (
    <div className="d-flex flex-column h-100 position-relative">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatBox;
