var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var injectTapEventPlugin = require("react-tap-event-plugin");

// inject:pagerequire
var LeaderboardPage = require('./pages/LeaderboardPage');
var SettingsPage = require('./pages/SettingsPage');
var TeamPage = require('./pages/TeamPage');
var LeaguesPage = require('./pages/LeaguesPage');
var AuthPage = require('./pages/AuthPage');
// endinject

var menuItems = [
  // inject:menuitems
  //{ payload: 'leaderboard', text: 'Leaderboard' },
  //{ payload: 'team', text: 'My Team' },
  //{ payload: 'settings', text: 'Settings' },
  { payload: 'leagues', text: 'Chat' },
  { payload: 'auth', text: 'Login/Logout' },
  // endinject
];

var titles = {
  // inject:titles
  '/': 'Backspin',
  '/leaderboard': 'Leaderboard',
  '/team': 'My Team',
  '/settings': 'Settings',
  '/leagues': 'Chat',
  '/auth': 'Login/Logout',
  // endinject
};

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var AppCanvas = mui.AppCanvas;
var AppBar = mui.AppBar;
var LeftNav = mui.LeftNav;

injectTapEventPlugin();

//----------
var appDataStore = require('./stores/AppDataStore')
var Fluxxor = require('Fluxxor')

  , stores = {
    appDataStore: new appDataStore()
  }
  , actions = {
    login: function () { this.dispatch('LOGIN')}
    , logout: function () { this.dispatch('LOGOUT')}
  }

  , flux = new Fluxxor.Flux(stores, actions);
//----------

var LeftNavComponent = React.createClass({
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

var Master = React.createClass({
  mixins: [Router.State],

  _onMenuIconButtonTouchTap: function () {
    this.refs.leftNav.toggle();
  },
  render: function () {
    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          title={titles[this.getPath()]}
          onMenuIconButtonTouchTap={this._onMenuIconButtonTouchTap}
          zDepth={0}>
        </AppBar>

        <LeftNavComponent ref='leftNav' menuItems={menuItems} />

        <div className='mui-app-content-canvas'>
          <RouteHandler flux={flux}/>
        </div>

      </AppCanvas>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={Master}>

    {/* inject:route */}
    <Route name='leaderboard' handler={LeaderboardPage} />
    <Route name='team' handler={TeamPage} />
    <Route name='leagues' handler={LeaguesPage} />
    <Route name='settings' handler={SettingsPage} />
    <Route name='auth' handler={AuthPage} />
    {/* endinject */}

    <DefaultRoute handler={LeaderboardPage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
