import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Nav = ({auth: {user}}) => {
  const buyer = (
    <div className="collapse navbar-collapse" id="sidebarCollapse">
      <Link to="/dashboard/products" className="nav-link nav-item">
        Products
      </Link>
      <Link to="/dashboard/saveProduct" className="nav-link nav-item">
        Saved Products
      </Link>
      <Link to="/dashboard/saveCompany" className="nav-link nav-item">
        Saved Companies
      </Link>
      <Link to="/dashboard/buyProduct" className="nav-link nav-item">
        Buy Products
      </Link>
    </div>
  );

  const seller = (
    <div className="collapse navbar-collapse" id="sidebarCollapse">
      <Link to="/supdashboard/products" className="nav-link nav-item">
        Products
      </Link>
      <Link to="/supdashboard/saveProduct" className="nav-link nav-item">
        Add Product
      </Link>
      <Link to="/supdashboard/saveCompany" className="nav-link nav-item">
        Saved Companies
      </Link>
    </div>
  );

  return (
    <nav
      className="navbar navbar-vertical fixed-start navbar-expand-md navbar-light mt-14"
      id="sidebar"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-brand mb-0">
          <h1 className="pb-0 mb-1">{user && user.first_name}'s Dashboard</h1>
          <small className="mt-1">you are {user.howMan}.</small>
        </div>
        <Fragment>{user.howMan === 'buyer' ? buyer : seller}</Fragment>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps) (Nav);
