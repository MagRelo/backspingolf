var React = require('react')


module.exports = React.createClass({

  render: function () {
    return (

      <div className='leaderboard-view'>

        <h4>Leaderboard</h4>

        <ul>
          {this.state.chatItems.map(function(item, i){
            return(
              <li key={i}>
                <Paper>
                  <div className="chatMessage">{item.from}: {item.content} </div>
                </Paper>
              </li>
            )
          })}
        </ul>

      </div>
    );
  }

});
