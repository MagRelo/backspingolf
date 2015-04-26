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
        <RaisedButton label="Login" onClick={this.props.loginFunction}></RaisedButton>
      </div>
    );
  }

});
