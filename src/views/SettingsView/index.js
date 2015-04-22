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
        <label for="a">A</label>
        <input type="checkbox" value={this.state.appData.settings.settingA}/>

        <label for="b">B</label>
        <input type="checkbox" value={this.state.appData.settings.settingA}/>

        <label for="c">C</label>
        <input type="checkbox" value={this.state.appData.settings.settingA}/>
      </div>
    );
  }

});
