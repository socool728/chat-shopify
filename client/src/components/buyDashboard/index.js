import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Nav from './Nav';
const BuyDash = ({auth: {user}}) => {
  return <Nav />;
};

BuyDash.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps) (BuyDash);
