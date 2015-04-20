var Fluxxor = require('Fluxxor')
  , request = require('request');

module.exports = Fluxxor.createStore({

  initialize: function () {

    // This is where you would initialize properties of your store. If you are
    // initializing attributes asynchronously, then you may consider calling
    // `this.emit('change')`.

    //request('http://localhost:9000/api/pga/leaderboard', function (err, res) {
    //  this.leaderboard = JSON.parse(res.data);
    //  this.emit('change');
    //}.bind(this));

    this.leaderboard = [
     {name: "matt", age:"30", id: "1"}
     , {name: "matt", age:"30", id: "2"}
    ];

   this.bindActions(
     'ADD_ELEMENT', this.addElement
   );

  },

  //Store Methods
  addElement: function () {
    this.leaderboard.push({name: "Jim", age: "10", id: this.leaderboard.length + 1});


    this.emit('change');
  },

  getState: function () {
    return {
      leaderboard: this.leaderboard
    }
  }

});