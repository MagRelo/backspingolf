var Fluxxor = require('Fluxxor')
  , Firebase = require('firebase')
  , ReactFire = require('reactfire')

var fireBaseRef = new Firebase("https://ballstrikers.firebaseio.com");

module.exports = Fluxxor.createStore({

  initialize: function () {

    this.appData = {
      auth: {},
      errors: []
    }

    this.appData.auth = fireBaseRef.getAuth() || {};


    this.bindActions(
      'LOGIN', this.login,
      'LOGOUT', this.logout
    );
  },

  login: function () {

    fireBaseRef.authWithOAuthPopup(
      "google"
      , function(error, authData) {
          if (error) {

            this.appData.errors.push(error)
            this.emit('change');
            console.log("Login Failed!", error)

          } else {

            this.appData.auth = authData;
            this.emit('change');
            console.log("Authenticated successfully");

          }
        }.bind(this)
      , {scope: "email", remember: "sessionOnly"}
    );

  },

  logout: function () {

    fireBaseRef.unauth();
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