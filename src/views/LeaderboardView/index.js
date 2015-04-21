var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

var appDataStore = require('../../stores/appDataStore');

var LeaderBoardItem = require('./leaderboardItem');


module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore') ]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , render: function () {

    return (
      <div className='leaderboard-view'>

        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appData.leaderboard.map(function(item){
                return <LeaderBoardItem key={item.id} item={item}/>
              })
            }
          </tbody>
        </table>

      </div>
    );
  }

});
