import React from 'react';

class DemoLogin extends React.Component {

  render() {
    const { formType, demoLogin } = this.props;
    let content = formType === "Log In" ? (
      <button onClick={demoLogin}>Demo Log In</button>
    ) : (
      <button onClick={demoLogin}>Demo Sign Up</button>
    );

    return(
      <div className="demo-login">
        {content}
      </div>
    );
  }
}

export default DemoLogin;
