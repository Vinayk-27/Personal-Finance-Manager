import React from 'react'

function Nav() {
  const bg_col_change={
    padding:'0px',
    color:'#f9fcff'
  }
  return (
    <div className='col-nav'>
        <nav class="navbar bg-body-tertiary" style={bg_col_change}>
  <div class="container-fluid" id='cont'>
    <a class="navbar-brand" href="#" id='nav_bar'>
      <img src="./src/assets/WhatsApp Image 2025-02-22 at 00.48.33_c116d9d0.jpg" id="logo"/>
     <b id='name_logo' >  PFMS</b>
    </a>
  <div className="butn">
    <div class="d-grid d-md-block">
  <button class="btn btn-primary" type="button" id='contact-us'>Contact-us</button>
  <button class="btn btn-primary" type="button">Info</button>
</div>
  </div>
  </div>

</nav>
      
    </div>
  )
}

export default Nav
