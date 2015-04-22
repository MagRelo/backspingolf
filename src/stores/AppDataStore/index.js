var Fluxxor = require('Fluxxor')
  , request = require('request');


module.exports = Fluxxor.createStore({

  initialize: function () {

    this.appData = {
      leaderboard: [],
      team: {},
      auth: {},
      settings: {
        settingA: false,
        settingB: true,
        settingC: "12"
      }
    }

    //load async data
    request('http://jsonplaceholder.typicode.com/todos', function (err, res) {

      //set response to store
      this.appData.leaderboard = JSON.parse(res.body);

      //notify of change
      this.emit('change');

    }.bind(this));

    // You may also want to bind some actions.
    //
    // Example:
    //
    //     this.bindActions(
    //       'DO_SOMETHING', this.doSomething
    //     );

  },

  // If you bound some actions in the `initialize` method, then it may be best
  // to have those actions refer to a method in this class. In this case, create
  // the method here. Example:
  //
  //     doSomething: function () {
  //       // Maybe do something with `this.someAttribute`?
  //
  //       // Call this if you've made some changes to this store.
  //       this.emit('change');
  //     },

  getState: function () {
    return {
      appData: this.appData
    }
  }

});