import React from 'react'
import {Route, Routes,Link} from 'react-router-dom'
import Home1 from './components/Home1'
import Destination from './components/Destination'
import Packages1 from './components/Packages1'
import Register1 from './components/Register1'
import Footer1 from './components/Footer1'


function App() {
    return (
        <div>
            {/* Navbar */}
            <div className='first'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                <img src='https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png' className='w-5' alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav mb-2 mb-lg-0 ms-auto fs-4 lead">
                    <li className="nav-item">
                      <Link className="nav-link active " to="Home1">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="Destination">Destination</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active"to="Packages1">Packages</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="Register1">Signup</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            </div>
            

            {/* Define routes and its children */}
            <Routes>
                <Route path="/Home1" element={<Home1/>}/>
              
                
                <Route path="/Destination" element={<Destination/>}/>
                <Route path="/Packages1" element={<Packages1/>}/>
                <Route path="/Register1" element={<Register1/>}/>
            </Routes>

          <Footer1/>


        </div>
        




    )
}

export default App
