var React = require('react')
  , Menu = require('material-ui').Menu

var filterMenuItems = [
  { payload: '1', text: 'Text Opt-In', toggle: true},
  { payload: '2', text: 'Text Opt-Out', toggle: true, defaultToggled: true},
  { payload: '3', text: 'Voice Opt-Out', toggle: true, disabled: true}
];

module.exports = React.createClass({

  render: function () {
    return (
      <div className='settings-view'>
        <label htmlFor="a">A</label>
        <input type="checkbox" value={}></input>

        <label htmlFor="b">B</label>
        <input type="checkbox" value={this.props.settings.settingB}></input>

        <label htmlFor="c">C</label>
        <input type="text" value={this.props.settings.settingC}></input>

        <Menu menuItems={filterMenuItems} />

      </div>
    );
  }

});
