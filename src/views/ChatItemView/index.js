var React = require('react')
  , mui = require('material-ui')
  , FlatButton = mui.FlatButton
  , Paper = mui.Paper



module.exports = React.createClass({

  propTypes: {
    id: React.PropTypes.string
    , name: React.PropTypes.string
    , message: React.PropTypes.string
  }


  , handleDelete: function(e) {
    e.preventDefault();

    var deleteRef = new Firebase("https://ballstrikers.firebaseio.com/chat/" + this.props.id);
    deleteRef.remove();
  }

  , render: function () {
    return (
      <Paper className='ChatItem-view'>

         <FlatButton
          label="Delete"
          primary={true}
          onClick={this.handleDelete}>
        </FlatButton>

        <h4> {this.props.name}</h4>
        <p>{this.props.message} </p>

      </Paper>
    );
  }

});
