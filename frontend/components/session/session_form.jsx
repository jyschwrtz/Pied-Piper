import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DemoLogin from './demo_login';
import Logo from '../logo/logo';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.demoInputText = this.demoInputText.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/browse');
    }
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.demoLogin) {
      this.demoLogin();
    }
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  demoInputText(field, text, cb) {
    let letters = text.split("");
    let inputText = "";
    const typeLetter = () => {
      inputText += letters.shift();
      this.setState({[field]: inputText});
      if (letters.length > 0) {
        let speed = Math.random() * (200 - 20) + 20;
        setTimeout((() => typeLetter()), speed);
      } else {
        setTimeout(() => cb(), 750);
      }
    };
    typeLetter();
  }

  demoLogin() {
    this.demoInputText("username", "demo_user", (
      () => this.demoInputText("password", "password", (
        () => this.props.login({username: "demo_user", password: "password"})
      ))
    ));
  }

  render() {
    const { loggedIn, formType, clearErrors } = this.props;
    const { username, email, password } = this.state;

    let errors;
    if (this.props.errors.session !== []) {
      errors = this.props.errors.session;
    }

    let emailInput;
    if (formType === "Sign Up") {
      emailInput = (<input
        type="text"
        onChange={this.handleInput("email")}
        placeholder="Email"
        value={email}
        />);
    }

    const otherForm = formType === "Log In" ? (
      <div className="session-other-form">
        <p>Don't have an account? <Link to="/signup" onClick={clearErrors}>Sign Up</Link></p>
      </div>
    ) : (
      <div className="session-other-form">
        <p>Already have an account? <Link to="/login" onClick={clearErrors}>Log In</Link></p>
      </div>
    );

    return (
      <div className="session">
        <ul className="session-errors">
          {
            errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
        <form
          className="session-form"
          onSubmit={this.handleSubmit}
          >
          <input
            type="text"
            onChange={this.handleInput("username")}
            placeholder="Username"
            value={username}
            />
          {emailInput}
          <input
            type="password"
            onChange={this.handleInput("password")}
            placeholder="Password"
            value={password}
            />
          <button>
            <input
              type="submit"
              className="session-btn"
              value={formType}
              />
          </button>
        </form>
        <DemoLogin
          demoLogin={this.demoLogin}
          formType={formType}
          />
        {otherForm}
      </div>
    );
  }
}

export default withRouter(SessionForm);
