var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

var LeaderboardStore = require('../../stores/LeaderboardStore');

var mui = require('material-ui')
  , RaisedButton = mui.RaisedButton;

var LeaderBoardItem = require('./leaderboardItem');


module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('LeaderboardStore') ]

  , getInitialState: function(){
    return {}
  }

  , getStateFromFlux: function () {
    return this.getFlux().store('LeaderboardStore').getState();
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
            {this.state.leaderboard.map(function(item){
                return <LeaderBoardItem key={item.id} item={item}/>
              })
            }
          </tbody>
        </table>

      </div>
    );
  }

});
