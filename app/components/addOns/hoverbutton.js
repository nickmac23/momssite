var React = require('react')
var Link = require('react-router').Link


var HoverButton = React.createClass({
  getInitialState: function () {
    return {
      background: 'none',
    }
  },
  handleMouseOver: function () {
    this.setState({background: 'rgb(8, 15, 19)'})
  },
  handleMouseOut: function () {
    this.setState({background: 'none'})
  },
  render: function () {
    var button = {
      border: 'solid white 2px',
      padding: '10px',
      color: "rgb(191, 189, 188)",
      background: this.state.background,
    }
    return (
      <Link onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} to={this.props.link} className={this.props.bootStrap} style={button}>{this.props.message}</Link>
    )
  }
})

module.exports = HoverButton
