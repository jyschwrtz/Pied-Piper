import React from 'react';

class DemoLogin extends React.Component {

  render() {
    const { formType, demoLogin } = this.props;
    let content = formType === "Log In" ? (
      <button onClick={demoLogin}>Demo Login</button>
    ) : (
      <button onClick={demoLogin}>Demo Signup (without email)</button>
    );

    return(
      <div className="demo-login">
        {content}
      </div>
    );
  }
}

export default DemoLogin;
