import React, { useState } from 'react';
import ChatBox from './ChatBox';
import UserSidebar from './UserSidebar';

// import './chat.css';
const ChatRoom = () => {
  const [scope, setScope] = useState(null);
  const [user, setUser] = useState(null);
  console.log(scope, user);
  return (
    <section id="frame">
      <UserSidebar setUser={setUser} setScope={setScope} />
      {user && <ChatBox scope={scope} user={user} />}
    </section>
  );
};

export default ChatRoom;
