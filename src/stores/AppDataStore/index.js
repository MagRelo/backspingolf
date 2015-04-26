var Fluxxor = require('Fluxxor')
  , request = require('request')
  , Firebase = require('firebase');


module.exports = Fluxxor.createStore({

  initialize: function () {

    this.appData = {
      leaderboard: []
      , auth: {}
    }

    //TODO - connect to firebase

    this.bindActions(
      'LOGIN', this.login,
      'LOGOUT', this.logout
    );

  },

  login: function () {
    var ref = new Firebase("https://ballstrikers.firebaseio.com");
    ref.authWithOAuthPopup("google", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        this.appData.auth = authData;

        this.emit('change');
        console.log("Authenticated successfully");
      }
    }.bind(this));

  },
  logout: function () {
    this.appData.auth = {};

    this.emit('change');
    console.log("Logged Out");
  },

  getState: function () {
    return {
      appData: this.appData
    }
  }

});