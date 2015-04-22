var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore') ]

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , render: function () {
    return (
      <div className='home-page'>



      </div>
    );
  }

});
