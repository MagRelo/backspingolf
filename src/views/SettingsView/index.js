var React = require('react')
  , Menu = require('material-ui').Menu



module.exports = React.createClass({

  render: function () {

    var filterMenuItems = [
      { payload: '1', text: 'Text Opt-In', toggle: true},
      { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
      { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
    ];

    return (
      <div className='settings-view'>

        <Menu menuItems={filterMenuItems} />

      </div>
    );
  }

});
