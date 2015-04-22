var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

var appDataStore = require('../../stores/AppDataStore');

module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore') ]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , render: function () {
    return (
      <div className='settings-view'>
        <label htmlFor="a">A</label>
        <input type="checkbox" value={this.state.appData.settings.settingA}></input>

        <label htmlFor="b">B</label>
        <input type="checkbox" value={this.state.appData.settings.settingB}></input>

        <label htmlFor="c">C</label>
        <input type="text" value={this.state.appData.settings.settingC}></input>
      </div>
    );
  }

});
