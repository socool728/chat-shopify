import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PropTypes from 'prop-types';

const Sidebar = (props) => {
  const buyer = (
    <ul>
      <li
        className={classnames('contact', { active: props.show == 'products' })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/dashboard/products">
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              Products
            </div>
          </Link>
        </div>
      </li>
      <li
        className={classnames('contact', { active: props.show == 'companies' })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/dashboard/companies">
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              Companies
            </div>
          </Link>
        </div>
      </li>
      <li
        className={classnames('contact', {
          active: props.show == 'saveproducts'
        })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/dashboard/saveproducts">
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              Saved Products
            </div>
          </Link>
        </div>
      </li>
      <li
        className={classnames('contact', {
          active: props.show == 'savecompanies'
        })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/dashboard/savecompanies">
            {' '}
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              Saved Companies
            </div>
          </Link>
        </div>
      </li>
      <li className="contact" style={{ padding: '0' }}>
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/dashboard/myProducts">
            <div
              className={classnames('contact', {
                active: props.show == 'myproducts'
              })}
              style={{ padding: '15px 0 15px 0' }}
            >
              My Products
            </div>
          </Link>
        </div>
      </li>
    </ul>
  );

  const seller = (
    <ul>
      <li
        className={classnames('contact', {
          active: props.show == 'manageproducts'
        })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/selldashboard/manageproducts">
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              Manage Products
            </div>
          </Link>
        </div>
      </li>
      <li
        className={classnames('contact', { active: props.show == 'profile' })}
        style={{ padding: '0' }}
      >
        <div className="wrap">
          {/* <span></span> */}
          <i />
          <Link to="/selldashboard/profile">
            <div className="meta" style={{ padding: '15px 0 15px 0' }}>
              My Profile
            </div>
          </Link>
        </div>
      </li>
    </ul>
  );

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
        </div>
      </div>

      <div id="contacts">
        {props.auth.user.howMan === 'buyer' ? buyer : seller}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Sidebar);
