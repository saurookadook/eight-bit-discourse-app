import React, { Component } from 'react';

class AccountPage extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="UserCloudBubble">
        { user.username }
      </div>
    )
  }
}

export default AccountPage;
