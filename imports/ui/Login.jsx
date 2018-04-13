import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    Meteor.loginWithPassword(
      { email: this.email.value.trim() },
      this.password.value.trim(),
      (err) => {
        if (err) {
          this.setState({ error: 'Unable to login. Check email and password' });
        } else {
          this.setState({ error: '' });
        }
      },
    );
  }

  render() {
    return (
      <div>
        <h1>Your Links</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit} noValidate>
          <input
            type="email"
            ref={(email) => {
              this.email = email;
            }}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            ref={(password) => {
              this.password = password;
            }}
            name="password"
            placeholder="Password"
          />
          <button> Login</button>
        </form>

        <Link to="/signup">Doesn&apos;t have an account?</Link>
      </div>
    );
  }
}
