import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.password.value.trim().length < 9) {
      return this.setState({
        error: 'Password must be more than 8 characters long',
      });
    }

    Accounts.createUser(
      { email: this.email.value.trim(), password: this.password.value.trim() },
      (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '' });
        }
      },
    );
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
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
          <button> Create Account</button>
        </form>
        <p>
          <Link to="/">Already have an account?</Link>
        </p>
      </div>
    );
  }
}
