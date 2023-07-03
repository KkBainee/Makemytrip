import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import image from '../image1.ss/tirupati.jpeg'
import '../App.css'

function Packages1() {
    return (
        <div className="container">
          <h1 className=' lead fs-2 text-center py-4'><b>Where2Go by MakeMyTrip - Discover Places & Plan Your Holidays!</b></h1>
          <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 mt-4'>
            <div className='col'>
            {/* Goa */}
            <div className="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg" className='rounded d-block px-3 py-3' alt=""/>
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Goa</h2><h4>5 Days-4 Nights</h4><h6>Popular for Beaches and Nightlife</h6></p>
            <p class="card-text">Get ready for an amazing beach vacation at Goa. You can expect very hot weather with very high humidity levels. You can also enjoy the various adventure activities in Goa.</p>

                <h4 className='mb-4'><b>Rs 14,751*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m1">Explore</button>
            </div>
        </div>
        <div className="modal fade" id="m1" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >Explore Goa at its Best!!</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Goa_5_l_1077_1625.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>Popularly known as India’s party capital, Goa seduces travellers from all around the globe with its boho beaches, ancient churches, majestic forts and unbeatable nightlife!</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        NOV-FEB
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        JUL-OCT
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        MAR-JUN
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Goa </h4></h1>
                    <p><em>
                      <li>Scuba Diving at Netrani Island</li>
                      <li>River Cruise over Mandovi River</li>
                      <li>Backwater Kayaking at Zauri and Mandovi Rivers</li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
        </div>
        {/* Kasol */}
        <div className='col'>
        <div class="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/kasol/mmt/destination/m_destination-kasol-landscape_l_400_640.jpg" className='rounded px-3 py-3' alt=""/>
           
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Kasol</h2><h4>5 Days-4 Nights</h4><h6>Mini Israel in Himachal Pradesh</h6></p>
            <p class="card-text">Enjoy a memorable mountain vacation at Kasol. You will love trekking, camping, festivals and parties. Kasol is also very popular among relaxation-seekers</p>
<br/>
                <h4 className='mb-4'><b>Rs 12,892*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m2">Explore</button>
            </div>
        </div>

        <div className="modal fade" id="m2" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >Mini Israel of Himachal</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Kasol_1_l_800_1200.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>The hill-hamlet of Kasol stands at over 1,580 meters above sea level, in Himachal Pradesh, and flaunts raw natural beauty with lush conifer forests, snow-capped Himalayan mountains and winding rivers.</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        MAR-JUN
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        JUL-SEP
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        OCT-FEB
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Kasol</h4></h1>
                    <p><em>
                      <li>Shopping at local Kasol Markets</li>
                      <li>Seek Blessings at Gurudwara Sahib Manikaran</li>
                      <li>Trekking at Kaosl Kheerganga</li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
        </div>
{/* Allepey */}
        <div className='col'>
        <div class="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg" className='rounded px-3 py-3' alt=""/>
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Allepey</h2><h4>3 Days-2 Nights</h4><h6>Nature Lovers Paradise</h6></p>
            <p class="card-text">If relaxation is what you’re after, head to Kerala. You will love exploring the backwaters and houseboat stays. Don’t forget to spend some time at the beaches of Alleppey.</p>
                <h4 className='mb-4'><b>Rs 15,146*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m3">Explore</button>
            </div>

            <div className="modal fade" id="m3" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >God's Own Country!!</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/new_dest_imagemar/mmt/activities/m_Alleppey_1_l_1316_2400.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>Also known as Alappuzha, Aleppey will take your breath away with its emerald green backwaters, palm-fringed lakes and beautiful stretches of lush paddy fields in the heart of Kerala.</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        OCT-MAR
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        JUL-SEP
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        APR-JUN
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Allepey </h4></h1>
                    <p><em>
                      <li>Explore the Backwaters</li>
                      <li>Realx at the Alleppey Beach</li>
                      <li>Visit Kuttanad and St.Mary's Forane Church</li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        </div>
        {/* Hampi */}
        <div className='col'>
        <div class="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/hampi/mmt/destination/m_Hampi_activity_heritage%20and%20culture_l_327_730.jpg" className='rounded px-3 py-3' alt=""/>
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Hampi</h2><h4>2 Days-1 Night</h4><h6>Open Air Museum In Karnataka</h6></p>
            <p class="card-text">The renowned UNESCO World Heritage Site and the once-magnificent capital of the Vijayanagara Empire; Hampi attracts backpackers and pilgrims in equal numbers due to its intriguing ruins of forts and temples.</p>
                <h4 className='mb-4'><b>Rs 3,146*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m4">Explore</button>
            </div>
        </div>

        <div className="modal fade" id="m4" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >Explore Goa at its Best!!</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/hampi/mmt/activities/t_ufs/m_activities_hampi_hampi_bazaar_l_400_640.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>The renowned UNESCO World Heritage Site and the once-magnificent capital of the Vijayanagara Empire; Hampi attracts backpackers and pilgrims in equal numbers due to its intriguing ruins of forts and temples</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        OCT-FEB
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        JUL-SEP
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        MAR-JUN
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Goa </h4></h1>
                    <p><em>
                      <li>Explore the Ancient Ruins of Vijaynagar Kingdom</li>
                      <li>Shop at Hampi and Vittala Bazaar at Handdicraft Stores</li>
                      <li>Visit Virupaksha Temple</li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
        </div>
{/* OOty */}
        <div className='col'>
        <div class="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/destination/m_destination-ooty-landscape_l_400_640.jpg" className='rounded px-3 py-3' alt=""/>
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Ooty</h2><h4>3 Days-2 Night</h4><h6>Colonial Hill station in Tamil Nadu</h6></p>
            <p class="card-text">Ooty is the perfect escape for romance-seekers. You can expect pleasant weather with temperatures not rising beyond 20°C. Don’t forget to indulge in adventure activities at Ooty.</p>
                <h4 className='mb-4'><b>Rs 3,146*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m">Explore</button>
            </div>
        </div>

        <div className="modal fade" id="m" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >Paradise of the Country</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/ooty/mmt/activities/t_ufs/m_activities-ooty-pykara-waterfalls_l_400_640.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>Officially called Ootacamund, the hill-town is better known by its nickname–Ooty. It is loved by Bollywood directors, honeymooners, families, and even backpackers, for its mountains, lakes, gardens, and waterfalls.</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        OCT-MAR
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        APR-MAY
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        JUN-SEP
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Goa </h4></h1>
                    <p><em>
                      <li>Visit Elk Hill Murugan Temple</li>
                      <li>Shop at Ooty Main Bazar </li>
                      <li>Travel in fmaous toy train,Nilgiri Mountain Railway, that connects Mettupalayam and Ooty </li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
        </div>
{/* Varanasi */}
        <div className='col'>
        <div class="card mx-auto shadow border-white mt-2 mb-3 ">
               <img src="https://hblimg.mmtcdn.com/content/hubble/img/varanasi/mmt/destination/m_destination-varanasi-landscape_l_400_640.jpg" className='rounded px-3 py-3' alt=""/>
            <div class="card-body">
            <p className=' display-4'><h2 className='text-info'>Rishikesh</h2><h4>4 Days-3 Night</h4><h6>Adventure Hub of Uttarakhand</h6></p>
            <p class="card-text">Situated on the banks of River Ganga in Uttar Pradesh, Varanasi is considered as one of the holiest cities, drawing tourists who seek spiritual awareness and liberation.</p>
                <h4 className='mb-4'><b>Rs 6,224*/-</b></h4>
            {/* modal */}
            <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#m6">Explore</button>
            </div>
        </div>


        <div className="modal fade" id="m6" data-bs-backdrop="static">
              <div className="modal-dialog modal-dialog-top">
                <div className="modal-content text-dark bg-white">
                  <div className="modal-header">
                    <h3 classNameName='text-center' >Spiritual Capital of Uttarakhand</h3>
                    <button
                      className="btn-close btn-danger"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>
                  <div className="modal-body">
                     <img src="https://hblimg.mmtcdn.com/content/hubble/img/DestMainImgLscape/mmt/activities/m_Varanasi_4_l_820_1224.jpg" alt="" className="w-75 rounded d-block text-center" /> 
                    <p className='mt-2'><em>Situated on the banks of River Ganga in Uttar Pradesh, Varanasi is considered as one of the holiest cities, drawing tourists who seek spiritual awareness and liberation.</em></p>            
                    <h1 className='lead'><h4>Best Time To Visit </h4></h1>
                    <ul className='list-group-horizontal'>
                      <li>
                        NOV-FEB
                        <h6 className='text-info'>Peak Season</h6>
                      </li>
                      <li>
                        JUL-OCT
                        <h6 className='text-warning'>Moderate Season</h6>
                      </li>
                      <li>
                        MAR-JUN
                        <h6 className='text-danger'>OFF Season</h6>
                      </li>
                    </ul>
                    <h1 className='lead'><h4>Things to do in Goa </h4></h1>
                    <p><em>
                      <li>Witness the Glory of Ganga Harthi</li>
                      <li>Visit Manikarnika Ghat</li>
                      <li>Enlish yourself with he famous delicacies of Varanasi</li></em>
                    </p>
               
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-success">Proceed to Book </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
        </div>
        
        
      
          
        </div>
        </div>
    )
}

export default Packages1
