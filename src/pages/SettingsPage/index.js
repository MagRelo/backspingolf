var React = require('react');

var appDataStore = require('../../stores/appDataStore')

var Fluxxor = require('Fluxxor')
  , stores = {
    appDataStore: new appDataStore()
  }
  , actions = {}
  , flux = new Fluxxor.Flux(stores, actions);

var SettingsView = require('../../views/SettingsView');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='settings-page'>
        <SettingsView flux={flux} />
      </div>
    );
  }

});
