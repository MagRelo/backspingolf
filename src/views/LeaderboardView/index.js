var React = require('react')

var LeaderBoardItem = require('./leaderboardItem');

module.exports = React.createClass({

  render: function () {
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
            {this.props.leaderboard.map(function(item){
                return <LeaderBoardItem key={item.id} item={item}/>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }

});
