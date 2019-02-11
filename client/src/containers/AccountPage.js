import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import UserGamesDisplay from '../components/UserGamesDisplay';

class AccountPage extends Component {

  // onClick() {

  // }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className="UserCloudBubble">
          <div className="DetailsContainer">
            <h3>Account Details</h3>
            <p><strong>Username: </strong>{ user.username }</p>
            <p><strong>Email: </strong>{ user.email }</p>
          </div>
        </div>

        { user.posts && (
          <UserGamesDisplay 
            posts={user.posts}
          />
        )}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(AccountPage);
// export default AccountPage;
