// import react from 'react';
// import User from '../../../../models/User';
import ChatBox from './ChatBox';
import UserSidebar from './UserSidebar';

import './chat.css';

const ChatRoom = () => {
  return (
    <section id="frame">
      <UserSidebar />
      <ChatBox />
    </section>
  );
};

export default ChatRoom;
