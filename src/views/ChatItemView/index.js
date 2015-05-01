var React = require('react')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton



// <RaisedButton
//label="Delete"
//primary={true}
//onClick={this.handleDelete}>
//</RaisedButton>

module.exports = React.createClass({

  propTypes: {
    id: React.PropTypes.string
    , name: React.PropTypes.string
    , message: React.PropTypes.string
    , handleDelete: React.PropTypes.func
  }


  , handleDelete: function(e) {
    e.preventDefault();
    this.props.handleDelete(this.props.id);
  }

  , render: function () {
    return (
      <div className='ChatItem-view'>
        <p> {this.props.name}: {this.props.message} </p>
      </div>
    );
  }

});
