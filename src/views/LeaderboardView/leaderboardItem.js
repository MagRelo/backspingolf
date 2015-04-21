var React = require('react')

module.exports = React.createClass({

  render: function(){
    return(
      <tr>
        <td>Name: {this.props.item.userId} </td>
        <td> {this.props.item.title}</td>
      </tr>
    )
  }

})

