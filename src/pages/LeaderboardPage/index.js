var React = require('react');

var appDataStore = require('../../stores/appDataStore')

var Fluxxor = require('Fluxxor')
  , stores = {
    appDataStore: new appDataStore()
  }
  , actions = {}
  , flux = new Fluxxor.Flux(stores, actions);

var LeaderboardView = require('../../views/LeaderboardView');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='leaderboard-page'>
        <LeaderboardView flux={flux}/>
      </div>
    );
  }

});
