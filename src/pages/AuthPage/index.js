var React = require('react')
  , helpers = require('../../helpers')
  , Fluxxor = require('Fluxxor')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin
  , Firebase = require('firebase')

var LoginView = require('../../views/LoginView')
var ProfileView = require('../../views/ProfileView')

module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore')]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , login: function() {
    this.getFlux().actions.login();
  }

  , logout: function() {
    this.getFlux().actions.logout();
  }

  , render: function () {
    return (
      <div className='auth-page'>
        {this.state.appData.auth.auth ?
          <ProfileView
            profilePicURL={this.state.appData.auth.google.cachedUserProfile.picture}
            profileName={this.state.appData.auth.google.cachedUserProfile.name}
            logoutFunction={this.logout}/>
          :
          <LoginView loginFunction={this.login}/>
        }
      </div>
    );
  }

});
