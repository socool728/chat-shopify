import React from 'react';
import Sidebar from './Sidebar';
import SavePosts from '../posts/SavePosts';
import PostItems from '../posts/PostItems';
import Posts from '../posts/Posts';
import Profiles from '../profiles/Profiles';
import ProfileForm from '../profile-forms/ProfileForm';

// import '../chatroom/chat.css';
const Dashboard = (props) => {
  const show = (show) => {
    if (show == 'products') return <PostItems />;
    else if (show == 'companies') return <Profiles />;
    else if (show == 'saveproducts') return <SavePosts />;
    else if (show == 'savecompanies') return <Profiles />;
    else if (show == 'myproducts') return <PostItems />;
    else if (show == 'manageproducts') return <Posts />;
    else if (show == 'profile') return <ProfileForm />;
  };
  return (
    <section id="frame">
      <Sidebar show={props.show} />
      <div
        className="messages"
        style={{
          overflowY: 'scroll',
          overflowX: 'hidden',
          minHeight: '100%',
          maxHeight: '100%'
        }}
      >
        {show(props.show)}
      </div>
    </section>
  );
};

export default Dashboard;
