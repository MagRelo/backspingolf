var React = require('react');

var LeaderboardStore = require('../../stores/LeaderboardStore')

var Fluxxor = require('Fluxxor')
  , stores = {
    LeaderboardStore: new LeaderboardStore()
  }
  , actions = {}
  , flux = new Fluxxor.Flux(stores, actions);

var LeaderboardView = require('../../views/LeaderboardView');

//


module.exports = React.createClass({
  render: function () {
    return (
      <div className='leaderboard-page'>
        <LeaderboardView flux={flux}/>
      </div>
    );
  }

});
