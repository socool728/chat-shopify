import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions/auth';

const OTP = otp => {
  const [formData, setFormData] = useState ({
    email: '',
  });

  const {email} = formData;

  const onChange = e =>
    setFormData ({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault ();
    top (email);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container mt-15">
      <h1 className="large text-primary">
        Sign In
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Send Digits" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
  );
};

Login.propTypes = {
  otp: PropTypes.func.isRequired,
};

export default connect (mapStateToProps, {otp}) (OTP);
