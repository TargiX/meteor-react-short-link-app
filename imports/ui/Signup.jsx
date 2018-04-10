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

    Accounts.createUser({ email: this.email.value, password: this.password.value }, (err) => {
      console.log('Signup callback', err);
    });
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit}>
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
