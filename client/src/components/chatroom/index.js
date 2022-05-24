// import react from 'react';
import ChatBox from './ChatBox';
import UserNav from './UserNav';

const ChatRoom = () => {
  return (
    <div className="layout overflow-hidden">
      <UserNav />
      <main className="main is-visible">
        <div className="container h-100">
          <ChatBox />
        </div>
      </main>
    </div>
  );
};

export default ChatRoom;
