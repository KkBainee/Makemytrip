import React from 'react'
import { Link } from 'react-router-dom'
import Packages1 from './Packages1'
import '../App.css'

function Destination() {
    return (
        <div className='container'>
            {/* Piligrimages */}
            <h1 className=' lead fs-2 text-center py-4'><b>Pick Destinations for your spiritual journey:</b></h1>
            

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://t3.ftcdn.net/jpg/03/97/97/46/240_F_397974689_SrsYY2thyAFYzpwzM8Ckp0mLUYxPyE8H.jpg" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>Char Dham</b></h5>
                <p class="card-text text-center">Badrinath, Kedarnath, Gangotri, Yamunotri</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 36,751*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
            <br />
            <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://t3.ftcdn.net/jpg/05/42/39/38/240_F_542393856_oex6jzbHNBTqj1fN7USd8D5abl1L530s.jpg" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>Puri Jagannath</b></h5>
                <p class="card-text text-center"> Puri Jagannath Temple, Shri Gundicha Temple, Puri</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 8,682*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://t3.ftcdn.net/jpg/00/79/42/12/240_F_79421210_I0M52qtTlynPUZnU6u83PaMvLoChY2Dg.jpg" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center font-italic"><b>Mathura</b></h5>
                <p class="card-text text-center">Shri Krishna Janmasthan, Dwarkadish Temple</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 6,772*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://t4.ftcdn.net/jpg/03/08/16/65/240_F_308166506_5PcIIezeBW5dVfFG7WtRoGitGnSgbhIX.jpg" class="card-img-top mh-25" alt=""/>
                <div className='card-img-overlay'><p className='card-text'>helo motto</p></div>
                <div class="card-body">
                <h5 class="card-title text-center"><b>Amritsar</b></h5>
                <p class="card-text text-center">The Golden Temple, Sri Harmandir Sahib</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 6,648*/-</b></h4>
                <hr className='text-info'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://as1.ftcdn.net/v2/jpg/03/56/97/24/1000_F_356972409_3OPKX66ljsBQNITYN4XgKmUtpAt8IdGB.jpg" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>Tirupati</b></h5>
                <p class="card-text text-center">Venkateshwara Temple, Akasha Ganga, Papavinasam</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 5,859*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://t3.ftcdn.net/jpg/01/41/19/70/240_F_141197018_JymdPbglccGrMgW4Bav4ex0HrjEcKHiU.jpg" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>Murudeshwar</b></h5>
                <p class="card-text text-center">Murudeshwar Temple, Mookambika</p>
                <h5 className='lead text-primary text-center'>starting from</h5>
                <h4 className='text-center text-primary'><b>Rs 9,512*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
        </div>


        {/*  */}

        <h1 className=' lead fs-2 text-center py-4'><b>Also avail these SUPER benefits:     </b></h1>

        <div className='card1 mx-auto w-100 border-white'>
            <div className='row row-cols-2 row-cols-sm-2 row-cols-md-4'>
                <div className='col'>
                    <div className='card1 mx-auto border-white shadow'>
                    <div className='row g-0'>
                        <div className='col px-2'>
                            <img src="https://promos.makemytrip.com/images/wildlife-ic1-02082022.webp" className='w-100 mt-3 py-2 mb-2' alt=""/>
                        </div>
                        <div className='col-sm-8'>
                            <p className='text-center text-danger px-4 py-5'><b>LIVE Chat Assistance </b></p>
                            <br/>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='col'>
                    <div className='card1 mx-auto border-white shadow'>
                    <div className='row g-0'>
                        <div className='col px-2'>
                            <img src="https://promos.makemytrip.com/images/wildlife-ic4-02082022.webp" className='w-100 mt-3 py-2 mb-2' alt=""/>
                        </div>
                        <div className='col-sm-8'>
                            <p className='text-center text-danger px-4 py-5'><b>Flight+Hotel combined deals</b></p>
                            
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
                <div className='col'>
                    <div className='card1 mx-auto border-white shadow'>
                    <div className='row g-0'>
                        <div className='col px-2'>
                            <img src="https://promos.makemytrip.com/images/wildlife-ic3-02082022.webp" className='w-100 mt-3 py-2' alt=""/>
                        </div>
                        <div className='col-sm-8'>
                            <p className='text-center text-danger px-4 py-5'><b>Customization of Packages </b></p>
                        </div>
                    </div>
                    </div>
                    <br/>
                </div>
                <div className='col'>
                    <div className='card1 mx-auto border-white shadow'>
                    <div className='row g-0'>
                        <div className='col px-2'>
                            <img src="https://promos.makemytrip.com/images/wildlife-ic2-02082022.webp" className='w-100 mt-3 py-2 mb-2' alt=""/>
                        </div>
                        <div className='col-sm-8'>
                            <p className='text-center text-danger px-4 py-5'><b>Exclusive Wildlife Packages   </b></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        {/* Wildlife */}
        <h1 className=' lead fs-2 text-center py-4'><b>Pick your fav wildlife destination in India:</b></h1>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://promos.makemytrip.com/images/wildlife-Ranthambore-02082022.webp" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>TIMSU NATIONAL PARK</b></h5>
                <p class="card-text text-center"></p>
                <h5 className='lead text-center'> Packages starting from</h5>
                <h4 className='text-center text-success'><b>Rs 10,276*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
            <br />
            <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://promos.makemytrip.com/images/jawai-021222.webp" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>JAWAI NATIONAL PARK</b></h5>
                <p class="card-text text-center"></p>
                <h5 className='lead text-center'>Packages starting from</h5>
                <h4 className='text-center text-success'><b>Rs 20,164*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://promos.makemytrip.com/images/wildlife-JimCorbett-02082022.webp" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center font-italic"><b>CORBET NATIONAL PARK</b></h5>
                <p class="card-text text-center"></p>
                <h5 className='lead text-center'> Packages starting from</h5>
                <h4 className='text-center text-success'><b>Rs 18,253*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://promos.makemytrip.com/images/gir-021222.webp" class="card-img-top mh-25" alt=""/>
                <div className='card-img-overlay'><p className='card-text'>helo motto</p></div>
                <div class="card-body">
                <h5 class="card-title text-center"><b>KAZIRA NATIONAL PARK</b></h5>
                <p class="card-text text-center"></p>
                <h5 className='lead text-center'>Packages starting from</h5>
                <h4 className='text-center text-success'><b>Rs 40,219*/-</b></h4>
                <hr className='text-info'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
            <div class="col">
            <div class="card mx-auto shadow w-15">
                <img src="https://promos.makemytrip.com/images/wildlife-Kanha-02082022.webp" class="card-img-top mh-25" alt=""/>
                <div class="card-body">
                <h5 class="card-title text-center"><b>KANHA NATIONAL PARK</b></h5>
                <p class="card-text text-center"></p>
                <h5 className='lead text-center'>Packages starting from</h5>
                <h4 className='text-center text-success'><b>Rs 21,530*/-</b></h4>
                <hr className='text-primary'/>
            </div>
            </div>
                  <br />
                  <br />
            </div>
           
        </div>
        
        {/* eXPLORE MORE */}
       
            <div className="explore-button text-center mb-4 ">
                   <button type='button' className='btn btn-dark text-warning fs-2'> <Link className="nav-link active" to="Packages1">Explore</Link></button>
                </div>



        </div>
    )
}

export default Destination
