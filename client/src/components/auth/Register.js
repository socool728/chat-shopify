import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState ({
    first_name: '',
    second_name: '',
    email: '',
    password: '',
    password2: '',
    vat: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  const {
    first_name,
    second_name,
    email,
    password,
    password2,
    vat,
    address,
    address2,
    city,
    state,
    zip,
  } = formData;

  const onChange = e =>
    setFormData ({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault ();
    if (password !== password2) {
      setAlert ('Passwords do not match', 'danger');
    } else {
      register ({
        first_name,
        second_name,
        email,
        password,
        vat,
        address,
        address2,
        city,
        state,
        zip,
      });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container mt-15">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="row g-3 form" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label className="form-label" for="inputFirstName">
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            name="first_name"
            value={first_name}
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" for="inputSecondName">
            Second Name
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Second name"
            name="second_name"
            value={second_name}
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label" for="inputEmail4">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" for="inputPassword">
            Pssword
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" for="inputConfirmPassword">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label" for="inputAddress1">
            Address 1
          </label>
          <input
            className="form-control"
            name="address"
            type="text"
            placeholder="1234 Main St"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label" for="inputAddress2">
            Address 2
          </label>
          <input
            className="form-control"
            name="address2"
            type="text"
            placeholder="Apartment, studio, or floor"
            value={address2}
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" for="inputCity">
            City
          </label>
          <input
            className="form-control"
            name="city"
            type="text"
            value={city}
            onChange={onChange}
            placeholder="New York"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label" for="state">
            State
          </label>
          <input
            className="form-control"
            name="state"
            type="text"
            placeholder="State"
            value={state}
            onChange={onChange}
          />
        </div>
        <div className="col-md-2">
          <label className="form-label" for="inputZip">
            Zip
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="456"
            name="zip"
            value={zip}
            onChange={onChange}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label" for="inputZip">
            VAT Number
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="456"
            name="vat"
            value={vat}
            onChange={onChange}
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect (mapStateToProps, {setAlert, register}) (Register);
