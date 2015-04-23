var React = require('react')
  , Firebase = require('firebase')
  , ReactFireMixin = require('reactfire')

module.exports = React.createClass({

  mixins: [ReactFireMixin]

  , getInitialState: function(){
   return {
      chatItems: []
    }
  }

  , componentWillMount: function() {
    this.bindAsArray(new Firebase("https://ballstrikers.firebaseio.com/chat"), "chatItems");
  }

  //, componentWillUnmount: function() {
  //  this.unbind("chatItems");
  //}

  //, handleSubmit: function(e) {
  //  e.preventDefault();
  //
  //  this.firebaseRefs["items"].push({
  //    text: this.state.text
  //  });
  //
  //  this.setState({ text: "" });
  //}

  , render: function () {
    return (
      <div className='firebase-page'>

        <h2>Chat Items</h2>

        <ul>
          {this.state.chatItems.map(function(item){
            return <li key={item.content}>{item.from}: {item.content}</li>
          })}
        </ul>

      </div>
    );
  }

});
