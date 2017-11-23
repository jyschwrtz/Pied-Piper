import React from 'react';
import { Link } from 'react-router-dom';

class DemoLogin extends React.Component {

  render() {
    const { formType, demoLogin } = this.props;
    let content = formType === "Log In" ? (
      <button onClick={demoLogin}>Demo Log In</button>
    ) : (
      <div></div>
    );

    return(
      <div className="demo-login">
        {content}
      </div>
    );
  }
}

export default DemoLogin;
