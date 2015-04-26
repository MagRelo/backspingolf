var React = require('react')
  , mui = require('material-ui')
  , RaisedButton = mui.RaisedButton;

module.exports = React.createClass({

  propTypes: {
    profilePicURL: React.PropTypes.string,
    profileName: React.PropTypes.string,
    profileEmail: React.PropTypes.string,
    logoutFunction: React.PropTypes.func
  }

  , render: function () {
    return (
      <div className='profile-view'>
        <img src={this.props.profilePicURL} alt="user image"/>
        <h3>{this.props.profileName}</h3>
        <p>{this.props.profileEmail}</p>
        <RaisedButton
          className="signoutButton"
          label="Sign Out"
          onClick={this.props.logoutFunction}/>
      </div>
    );
  }

});
