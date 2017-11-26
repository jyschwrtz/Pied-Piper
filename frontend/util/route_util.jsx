import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import React from 'react';

// renders component if logged out
const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/browse/featured" />
      )
    )}/>
);

// renders component if logged out -- EXACT PATH
const AuthExact = ({component: Component, path, loggedIn}) => (
  <Route exact path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/browse/featured" />
      )
    )}/>
);

// renders component if logged in
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/"/>
      )
    )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(
  connect(mapStateToProps,
   null
 )(Auth)
);

export const AuthExactRoute = withRouter(
  connect(mapStateToProps,
   null
 )(AuthExact)
);

export const ProtectedRoute = withRouter(
  connect(mapStateToProps,
   null
 )(Protected)
);
