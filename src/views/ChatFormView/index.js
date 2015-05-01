var React = require('react/addons')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton
  , TextField = mui.TextField

module.exports = React.createClass({

  mixins: [React.addons.LinkedStateMixin]

  , propTypes: {
    submitButtonLabel: React.PropTypes.string
    , handleSubmit: React.PropTypes.func
  }

  , getInitialState: function(){
    return { chatMessage: ""}
  }

  , handleSubmit: function(e) {
    e.preventDefault();

    this.props.handleSubmit(this.state.chatMessage);

    this.setState({ chatMessage: "" });
  }

  , render: function(){
    return(
      <div className="chatForm-view">

        <TextField
          name="chatMessage"
          hintText="Add chat message..."
          multiline={true}
          valueLink={this.linkState('chatMessage')}/>

        <RaisedButton
          label={this.props.submitButtonLabel}
          primary={true}
          onClick={this.handleSubmit}>
        </RaisedButton>

      </div>
    )
  }

})
