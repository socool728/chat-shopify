import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import ProfileForm from './components/profile-forms/ProfileForm';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import ChatRoom from './components/chatroom';
import BuyDash from './components/buyDashboard';
import Products from './components/buyDashboard/Products';
import Nav from './components/buyDashboard/Nav';
import SaveCom from './components/buyDashboard/SaveCom';
import SaveProduct from './components/buyDashboard/SaveProduct';
import BuyProduct from './components/buyDashboard/BuyProduct';

import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route
            path="create-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="edit-profile"
            element={<PrivateRoute component={ProfileForm} />}
          />
          <Route
            path="add-experience"
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path="add-education"
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path="posts" element={<PrivateRoute component={Posts} />} />
          <Route path="posts/:id" element={<PrivateRoute component={Post} />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="chatroom"
            element={<PrivateRoute component={ChatRoom} />}
          />
          <Route
            path="dashboard"
            element={<PrivateRoute component={BuyDash} />}
          />
          <Route
            path="dashboard/products"
            element={
              <PrivateRoute
                component={function () {
                  return (
                    <section>
                      <Nav />
                      <Products />
                    </section>
                  );
                }}
              />
            }
          />
          <Route
            path="dashboard/saveProduct"
            element={
              <PrivateRoute
                component={function () {
                  return (
                    <section>
                      <Nav />
                      <SaveProduct />
                    </section>
                  );
                }}
              />
            }
          />
          <Route
            path="dashboard/saveCompany"
            element={
              <PrivateRoute
                component={function () {
                  return (
                    <section>
                      <Nav />
                      <SaveCom />
                    </section>
                  );
                }}
              />
            }
          />
          <Route
            path="dashboard/buyProduct"
            element={
              <PrivateRoute
                component={function () {
                  return (
                    <section>
                      <Nav />
                      <BuyProduct />
                    </section>
                  );
                }}
              />
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
