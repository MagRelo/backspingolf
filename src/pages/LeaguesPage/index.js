var React = require('react')
  , Fluxxor = require('Fluxxor')
  , helpers = require('../../helpers')
  , StoreWatchMixin = Fluxxor.StoreWatchMixin
  , ReactFireMixin = require('reactfire')

  , ChatFormView = require('../../views/ChatFormView')
  , ChatItemView = require('../../views/ChatItemView')


var ChatList = React.createClass({
  render: function() {
    var ChatNodes = this.props.data.map(function (item, index) {
      return <ChatItemView
          key={index}
          id={item.$id}
          name={item.from}
          message={item.content}
          handleDelete={this.handleDelete}
          />;
    });
    return <ul>{ChatNodes}</ul>;
  }
});


module.exports = React.createClass({

  mixins: [helpers.FluxMixin, StoreWatchMixin('appDataStore'), ReactFireMixin]

  , getInitialState: function(){
    return {
      chatItems: []
      , chatMessage: ""
    }
  }

  , getStateFromFlux: function () {
    return this.getFlux().store('appDataStore').getState();
  }

  , componentWillMount: function() {
    this.bindAsArray(new Firebase("https://ballstrikers.firebaseio.com/chat"), "chatItems");
  }

  , handleDelete: function(itemID) {

    var deleteRef = new Firebase("https://ballstrikers.firebaseio.com/chat/" + itemID);
    deleteRef.remove();
  }

  , handleSubmit: function(message) {
    this.firebaseRefs["chatItems"].push({
      id: this.state.appData.auth.uid
      , from: this.state.appData.auth.google.displayName
      , content: message
    });

    this.setState({ chatMessage: "" });
  }

  , render: function () {


    return (
      <div className='leagues-page'>

        <h4>Chat Items</h4>

        {!this.state.appData.auth.auth ?
          <p>Please log in.</p>
          :

          <div>
            <ChatList data={this.state.chatItems}></ChatList>

            <ChatFormView
              submitButtonLabel="Send message"
              handleSubmit={this.handleSubmit}
              />

          </div>
        }

      </div>
    );
  }

});
