import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
// import aws_exports from './aws-exports';
// Amplify.configure(aws_exports);

Amplify.configure({
    Auth: {
         // OPTIONAL - Hosted UI configuration
        oauth: {
            domain: 'koyakimu-idp-test.auth.ap-northeast-1.amazoncognito.com',
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'https://koyakimu-idp-test.auth.ap-northeast-1.amazoncognito.com/login',
            redirectSignOut: 'https://koyakimu-idp-test.auth.ap-northeast-1.amazoncognito.com/logout',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
    }
});

// You can get the current config object
// const currentConfig = Auth.configure();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
