var Fluxxor = require('Fluxxor')
  , request = require('request');

module.exports = Fluxxor.createStore({

  initialize: function () {

    // This is where you would initialize properties of your store. If you are
    // initializing attributes asynchronously, then you may consider calling
    // `this.emit('change')`.

    this.leaderboard = [];

    //load async data
    request('http://jsonplaceholder.typicode.com/todos', function (err, res) {

      //set response to store
      this.leaderboard = JSON.parse(res.body);

      //notify of change
      this.emit('change');

    }.bind(this));

   this.bindActions();

  }

  , getState: function () {
    return {
      leaderboard: this.leaderboard
    }
  }

});