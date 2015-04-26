var React = require('react')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton
  , TextField = mui.TextField;

module.exports = React.createClass({

  propTypes: {
    chatMessage: React.PropTypes.string
    , addMessageFunction: React.PropTypes.func
  }

  , render: function(){
    return(
      <div className="chatForm-view">

        <TextField
          name="chatMessage"
          hintText="Add chat message..."
          multiline={true}/>

        <RaisedButton
          label="Send Message"
          primary={true}
          onClick={this.props.addMessageFunction}>
        </RaisedButton>
      </div>
    )
  }

})
