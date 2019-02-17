import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import EditInfoForm from './EditInfoForm';
import EditButton from '../components/buttons/EditButton';
import CancelButton from '../components/buttons/CancelButton';

import UserGamesDisplay from '../components/UserGamesDisplay';


class AccountPage extends Component {
  state = {
    ...this.props,
    isEditable: false
  }

  toggleEdit = () => {
    this.setState({ isEditable: !this.state.isEditable });
  }

  render() {
    const { isEditable } = this.state;
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className="UserCloudBubble">
          <div className="DetailsContainer">
            <h3>Account Details</h3>
          { isEditable ? (
            <>
              <EditInfoForm
                user={user}
                onClick={this.toggleEdit}
              />
              {/* <CancelButton
                onClick={this.toggleEdit}
              /> */}
            </>
          ) : (
            <React.Fragment>
              <p><strong>Username: </strong>{ user.username }</p>
              <p><strong>Email: </strong>{ user.email }</p>
              { user && (
                <EditButton 
                  isEditable={isEditable}
                  onClick={this.toggleEdit}
                />
              )}
            </React.Fragment>
          )}
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

// const mapStateToProps = state => {
//   return { ...state };
// }

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(AccountPage);
