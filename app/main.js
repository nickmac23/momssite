var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router')

var comps = require('./components')

var Main = React.createClass({
  render:function () {
    page ={
      overflowY: 'hidden',
      hieght: '100vh',
      widht: '100vw',
      fontFamily: 'Yatra One',
    }
    return (
      <main style={page}>
        <comps.SideBar />
        {this.props.children}
      </main>
    )
  }
})

ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={Main}>
      <ReactRouter.IndexRoute component={comps.Landing} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('body')
);
