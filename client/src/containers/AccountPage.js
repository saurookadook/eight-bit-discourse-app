import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Constants
import * as actions from '../actions';

// Static/Stateless
import EditButton from '../components/buttons/EditButton';
import UserGamesDisplay from '../components/UserGamesDisplay';

// Content
import EditInfoForm from './EditInfoForm';

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
            <h5>Account Details</h5>
            { isEditable ? (
              <EditInfoForm
                user={user}
                onClick={this.toggleEdit}
              />
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

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(AccountPage);
