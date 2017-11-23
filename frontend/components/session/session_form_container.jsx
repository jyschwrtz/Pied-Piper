import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType: ownProps.location.pathname === "/login" ? "Log In" : "Sign Up"
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/login" ? login : signup;
  return ({
    processForm: user => dispatch(action(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
