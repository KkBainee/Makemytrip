import React from 'react'
import { Link } from 'react-router-dom'
function Footer1() {
    return (
            <footer className='sticky-footer d-flex justify-content-around bg-dark text-white py-3 mt-auto'>
            {/* <div className=' footer d-flex justify-content-around bg-dark text-white py-5 mt-auto fixed-bottom ' > */}
                {/* <div className='row mx-auto'>
                    <div className='row-mt-5'>
                        <div className='col sm-6'>
                            <p className=''>Terms and Conditions Applied</p>
                        </div>
                        <div className='col sm-6'>
                            <h2>2023@Travel&Co</h2>
                        </div>
                    </div>
                </div> */}
                   <div className='row '>
                <div className='row-mt-5'>
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <div className='col-sm-3'>
                    <li className="nav-item">
                      <Link className="nav-link active" to="">EMAIL:  travelnco@gmail.com</Link>
                    </li>
                    </div>
                    <div className='col-sm-3'>
                    <li className="nav-item">
                      <Link className="nav-link" to="">PHONE: +91234567890</Link>
                    </li>
                    </div>
                   
                  </ul>
                  
                  </div>
                  </div>
              
                
                <div className='row '>
                <div className='row-mt-5'>
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <div className='col-sm-3'>
                    <li className="nav-item">
                      <Link className="nav-link active" to="">2023<b> MAKEMYTRIP PVT.LTD.</b></Link>
                    </li>
                    </div>
                    <div className='col-sm-3'>
                    <li className="nav-item">
                      <Link className="nav-link" to="">Country<b>IndiaUsaUAE</b></Link>
                    </li>
                    </div>
                   
                   
                  </ul>
                  
                  </div>
                  </div>

            {/* </div> */}
            </footer>
    )
}

export default Footer1
