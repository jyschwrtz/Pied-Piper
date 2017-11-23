import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DemoLogin extends React.Component {
  loginFromSignup() {
    this.props.history.push({
      pathname: '/login',
      state: { demoLogin: true }
    });
  }

  render() {
    console.log(this.props);
    const { formType, demoLogin } = this.props;
    let content = formType === "Log In" ? (
      <button onClick={demoLogin}>Demo Log In</button>
    ) : (
        <button onClick={this.loginFromSignup.bind(this)}>Demo Log In</button>
    );

    return(
      <div className="demo-login">
        {content}
      </div>
    );
  }
}

export default withRouter(DemoLogin);
