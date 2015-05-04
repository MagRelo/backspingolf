var React = require('react')
  , mui = require('material-ui')
  , LeftNav = mui.LeftNav
  , Router = require('react-router')


module.exports = React.createClass({

  mixins: [Router.Navigation],

  render: function () {
    return (
      <LeftNav
        ref="leftNav"
        header={<div className='logo'>Backspin</div>}
        docked={false}
        isInitiallyOpen={false}
        menuItems={this.props.menuItems}
        onClick={this._onLeftNavChange}
        onChange={this._onLeftNavChange} />
    );
  },

  toggle:function () {
    this.refs.leftNav.toggle();
  },

  close: function () {
    this.refs.leftNav.close()
  },

  _onLeftNavChange: function(e, selectedIndex, menuItem) {
    this.transitionTo(menuItem.payload);
    this.refs.leftNav.close();
  }
});

