var React = require('react')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton;

var helpers = require('../../helpers');


module.exports = React.createClass({

  propTypes: {
    profilePicURL: React.PropTypes.string,
    profileName: React.PropTypes.string,
    logoutFunction: React.PropTypes.func
  }

  , render: function () {
    return (
      <div className='profile-view'>
        <img src={this.props.profilePicURL} alt="user image"/>
        <h3>{this.props.profileName}</h3>
        <RaisedButton label="Logout" onClick={this.props.logoutFunction}/>
      </div>
    );
  }

});
