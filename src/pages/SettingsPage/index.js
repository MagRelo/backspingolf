var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

var SettingsView = require('../../views/SettingsView');

module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore') ]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , render: function () {
    return (
      <div className='settings-page'>
        <SettingsView />
      </div>
    );
  }

});
