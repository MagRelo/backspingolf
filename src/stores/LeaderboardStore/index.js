var Fluxxor = require('Fluxxor')
  , request = require('request');

module.exports = Fluxxor.createStore({

  initialize: function () {

    //setup data
    this.leaderboard = [];

    //load async data
    request('http://jsonplaceholder.typicode.com/todos', function (err, res) {

      //set response to store
      this.leaderboard = JSON.parse(res.body);

      //notify of change
      this.emit('change');

    }.bind(this));


    //bind events to actions
    this.bindActions();

  }

  //add actions here

  , getState: function () {
    return {
      leaderboard: this.leaderboard
    }
  }

});