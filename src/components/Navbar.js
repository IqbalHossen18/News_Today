import React from 'react'
import {Link} from 'react-router-dom';

const Navbar =(props)=> {
    const navclr = '#212F3D';
    const lightModeColor = '#95A5A6';
    let {mode,handlemode,textclr,btntext} =props
    return (
      <>
                <nav style={{ backgroundColor:mode === 'light' ? lightModeColor : navclr}} className={`navbar sticky-top navbar-expand-lg navbar-${mode}`}
>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News_Today</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Country's general
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                           
                             <li><Link className="dropdown-item" to="/us">United State</Link></li>
                             <li><Link className="dropdown-item" to="/in">India</Link></li>
                             {/* <li><Link className="dropdown-item" to="/it">Italy</Link></li> */}
                         {/* <li className="dropdown-item"><Link className="nav-link" aria-current="page" to="/us">United State</Link></li> */}
                      </ul>
                    </li>
                    {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/us">United State</Link></li> */}
                    </ul>
                    </div>
                </div>
                <div style={{width:'200px',marginLeft:'10px'}} className="form-check form-switch">
                  <input  onClick={handlemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label style={{fontSize:'15px'}} className={`form-check-label text-${textclr}`} htmlFor="flexSwitchCheckDefault">{btntext}</label>
                </div>
                </nav>
      </>
    )
}

export default Navbar