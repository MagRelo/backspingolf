var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

var LeaderboardView = require('../../views/LeaderboardView');

module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore') ]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , render: function () {
    return (
      <div className='leaderboard-page'>
        <LeaderboardView leaderboard={this.state.appData.leaderboard}/>
      </div>
    );
  }

});
