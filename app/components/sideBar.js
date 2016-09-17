var React = require('react')
var Link = require('react-router').Link


var SideBar = React.createClass({
  getInitialState: function() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  navBar: function () {
    var sideBar = {
      background: 'rgb(8, 15, 19)',
      border: '0px',
      borderRadius: '0%',
      padding: '0px',
      position: 'fixed',
      height: '100vh',
      zIndex: '2'
    }
    var topBar = {
      background: 'black',
      border: '0px',
      borderRadius: '0%',
      color: "rgb(191, 189, 188)",
      marginBottom: '0px'
    }
    var center = {
      textAlign: 'center',
      color: "rgb(191, 189, 188)"
    }
    var button = {
      background: 'black',
      color: "rgb(191, 189, 188)"
    }
    var border ={
      borderTop: 'solid rgb(191, 189, 188) 1px',
      borderBottom: 'solid rgb(191, 189, 188) 1px',
    }
    var margin ={
      marginTop: '0px'
    }
    var img ={
      width: '30%'
    }
    if(this.state.windowWidth > 1011){
      return(
        <div style={sideBar} className='navbar navbar-default col-lg-2 col-md-2'>
            <ul style={center} className="nav nav-pills nav-stacked col-lg-">
              <li><img style={img} src='./app/img/lotus-512.png' /></li>
              <li><h2 style={margin}>SaraLefkowitz</h2></li>
              <li><h1>...</h1></li>
              <br/>
              <li>-</li>
              <li><Link to={'/'}>Home</Link></li>
              <li>-</li>
              <li><Link to={'/about'}>About</Link></li>
              <li>-</li>
              <li>Blog</li>
              <li>-</li>
              <li>Contact</li>
              <li>-</li>
              <br />
              <li><h1>...</h1></li>
            </ul>
        </div>
      )
    } else {
      return (
        <div style={topBar} className='navbar navbar-default col-sm-10'>
          <div className='row'>
            <button style={button} type="button" className="navbar-toggle" data-toggle="collapse" data-target="#naver" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">SaraLefkowitz</a>
          </div>
          <div className="collapse col-lg-10" id="naver">
            <ul style={center} className="nav nav-pills nav-stacked" >
              <li data-toggle="collapse" data-target="#naver" ><a>Home</a></li>
              <li data-toggle="collapse" data-target="#naver" ><a>About</a></li>
              <li data-toggle="collapse" data-target="#naver" ><a>Blog</a></li>
              <li data-toggle="collapse" data-target="#naver" ><a>Contact</a></li>
            </ul>
          </div>
        </div>
      )
    }
  },
  handleResize: function(e) {
   this.setState({windowWidth: window.innerWidth});
   console.log(this.state.windowWidth);
   },
   componentDidMount: function() {
     window.addEventListener('resize', this.handleResize);
   },

   componentWillUnmount: function() {
     window.removeEventListener('resize', this.handleResize);
   },
  render: function(){
    var navbar = this.navBar()
    return (
      <div>
        {navbar}
      </div>
    )
  }

})

module.exports = SideBar
