var React = require('react')
  , Firebase = require('firebase')
  , ReactFireMixin = require('reactfire')

  , Paper = require('material-ui').Paper

  , ChatFormView = require('../../views/ChatFormView');


module.exports = React.createClass({

  mixins: [ReactFireMixin]

  , getInitialState: function(){
    return {
      chatItems: []
      , chatMessage: ""
    }
  }

  , componentWillMount: function() {
    this.bindAsArray(new Firebase("https://ballstrikers.firebaseio.com/chat"), "chatItems");
  }

  , handleSubmit: function(e) {
    e.preventDefault();

    this.firebaseRefs["chatItems"].push({
      id: ""
      , from: "tester"
      , content: this.state.chatMessage
    });

    this.setState({ chatMessage: "" });
  }

  , render: function () {
    return (
      <div className='leagues-page'>

        <h4>Chat Items</h4>

        <ul>
          {this.state.chatItems.map(function(item, i){
            return(
              <li key={i}>
                <Paper>
                  <div className="chatMessage">{item.from}: {item.content} </div>
                </Paper>
              </li>
            )
          })}
        </ul>

        <ChatFormView chatMessage="chatMessage" addMessageFunction={this.handleSubmit}></ChatFormView>

      </div>
    );
  }

});
