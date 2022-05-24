import React from 'react';
import Message from './Message';

const ChatBody = () => {
  return (
    <div className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner">
        <Message />
        <Message className="message-out" p="a" />
      </div>
    </div>
  );
};

export default ChatBody;
