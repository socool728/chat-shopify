import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProfileTop = ({
  profile: {status, company, location, website, social, user: {name, avatar}},
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company ? <span> at {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
      <div className="icons my-1">
        {website
          ? <Link to={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x" />
            </Link>
          : null}
        {social
          ? Object.entries (social)
              .filter (([_, value]) => value)
              .map (([key, value]) => (
                <Link
                  key={key}
                  to={value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${key} fa-2x`} />
                </Link>
              ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
