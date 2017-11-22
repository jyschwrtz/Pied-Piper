import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname === "/login" ? "Log In" : "Sign Up"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === "/login" ? login : signup;
  return ({
    processForm: user => dispatch(action(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
