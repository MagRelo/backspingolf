var React = require('react')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton
  , Paper = mui.Paper

module.exports = React.createClass({

  propTypes: {
    loginFunction: React.PropTypes.func
  }

  , render: function () {
    return (
      <div className='login-view'>
        <h3>Sign in with Google</h3>
        <RaisedButton
          label="Sign In"
          primary={true}
          onClick={this.props.loginFunction}></RaisedButton>
      </div>
    );
  }

});
