import React from 'react';
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

export default class Links extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>Short Lnk</h1>

        <button onClick={this.onLogout}>Log out</button>
      </div>
    );
  }
}
