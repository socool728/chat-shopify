import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getSavePosts } from '../../actions/post';

const SavePosts = ({ getSavePosts, post: { posts }, auth }) => {
  useEffect(() => {
    getSavePosts(auth.user._id);
  }, [getSavePosts]);

  return (
    <section className="container">
      <h1 className="large text-primary">Products</h1>

      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

SavePosts.propTypes = {
  getSavePosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getSavePosts })(SavePosts);
