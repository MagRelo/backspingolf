var React = require('react')
  , mui = require('material-ui')
  , Paper= mui.Paper

module.exports = React.createClass({

  propTypes: {

  }

  , render: function () {
    return (

      <div className='leaderboard-view'>

        <h4>Leaderboard</h4>
        <ul>
          {this.props.leaderboard.map(function(item, i){
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
