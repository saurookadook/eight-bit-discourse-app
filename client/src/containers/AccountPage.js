import React, { Component } from 'react';

class AccountPage extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="container">
        { user.username }
        TBD
      </div>
    )
  }
}

export default AccountPage;
