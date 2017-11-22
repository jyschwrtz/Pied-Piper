import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/browse');
    }
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

  render() {
    const { loggedIn, formType } = this.props;
    const { username, email, password } = this.state;
    const otherFormType = formType === "Log In" ? "Sign Up" : "Log In";
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
        <p>Don't have an account? <Link to="/signup" >Sign Up</Link></p>
      </div>
    ) : (
      <div className="session-other-form">
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
    );

    return (
      <div className="session">
        <header>
          <Link to="/">Spotify</Link>
        </header>
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
        {otherForm}
      </div>
    );
  }
}

export default withRouter(SessionForm);
