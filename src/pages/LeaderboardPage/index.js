var React = require('react');
var Fluxxor = require('Fluxxor');

var LeaderboardStore = require('../../stores/LeaderboardStore');
var Leaderboard = require('../../views/LeaderboardView');



var stores = {
  LeaderboardStore: new LeaderboardStore()
};

var actions = {
 addElement: function (info) {
   this.dispatch('ADD_ELEMENT', {info: info});
 }
};



var flux = new Fluxxor.Flux(stores, actions);
module.exports = React.createClass({
  render: function () {
    return (
      <div className='leaderboard-page'>
        <Leaderboard flux={flux}/>
      </div>
    );
  }

});
