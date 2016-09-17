var React = require('react')
var Button = require('./addOns').HoverButton
var Landing = React.createClass({
  render: function () {
    container = {
      padding: '0px',
      height: '100vh',
    }
    var dark = {
      background: 'rgba(0, 0, 0, .5)',
      color: "rgb(191, 189, 188)",
      textShadow: '2px 2px black',
      zIndex: '1',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: "0",
      padding: '30px',

      textAlign: 'center'
    }
    var img = {
      position: 'absolute',
      width: '100%',
      top: '0',
      left: "0",
      zIndex: '-1'
    }
    var font = {
      fontSize: '18px'
    }

    return (
      <div>
        <div style={container} className='col-lg-10 col-md-10 col-sm-10'>
          <img style={img} src='http://globalroom-biz.isabelvalle.com/wp-content/uploads/2014/09/ZenStones01.jpg'/>
          <div style={dark} className='col-lg-10'>
            <div className='col-lg-offset-2 col-md-offset-2'>
              <h1>Stress Reduction Strategies for Nurses</h1>
              <h2> Revitalize Your Practice</h2>
              <br />
              <br />
              <p style={font}>Sara Lefkowitz, RN, BSN, MPA, has a background in acute care nursing specializing in medical/surgical and emergency care. Sara currently teaches Mindfulness Based Stress Reduction (MBSR) which is a curriculum developed by Jon Kabat-Zinn at the Stress Reduction Clinic at the University of Massachusetts Medical Center. Additionally, she is a faculty member for a nursing college in California. She maintains balance through her own daily mindfulness and compassion meditation practices.
Sara’s passion is teaching experiential mindfulness based workshops. These workshops are designed to teach nurses skills to successfully manage stress and avoid burnout. In developing these workshops, Sara has integrated her experiences from beside nursing, curriculum development and meditation practice. She is practically influenced by the work of Rick Hanson and his use of neuroscience to explain the mind and the brain. Sara feels confident that the information presented will help nurses more optimally fulfill their desire to make a difference in the lives of others.</p>
            <Button link={'/'} bootStrap={'col-lg-2 col-lg-offset-4'} message={'Click Here to learn more'}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Landing
