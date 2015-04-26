var React = require('react')
  , Firebase = require('firebase')
  , ReactFireMixin = require('reactfire')

  , mui = require('material-ui')
  , Paper= mui.Paper

  , ChatFormView = require('../../views/ChatFormView')

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

  //, componentWillUnmount: function() {
  //  this.unbind("chatItems");
  //}

  , handleSubmit: function(e) {
    e.preventDefault();

    this.firebaseRefs["chatItems"].push({
      text: this.state.chatMessage
    });

    this.setState({ text: "" });
  }

  , render: function () {
    return (
      <div className='firebase-page'>

        <h2>Chat Items</h2>

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
