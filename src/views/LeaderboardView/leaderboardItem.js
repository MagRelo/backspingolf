var React = require('react')

module.exports = React.createClass({

  render: function(){
    return(
      <li>Name: {this.props.item.name}, Age: {this.props.item.age}</li>
    )
  }

})

