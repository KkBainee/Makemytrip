import React from 'react'


function Home1() {
    return (
        <div>
            {/* Carousel */}
          <div class="carousel slide" data-bs-ride="carousel" id="cr">
        {/* carousel-indicator */}
        <div class="carousel-indicators">
          <button
            data-bs-target="#cr"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            data-bs-target="#cr"
            data-bs-slide-to="1"
            class="active"
          ></button>
          <button
            data-bs-target="#cr"
            data-bs-slide-to="2"
            class="active"
          ></button>
        </div>

        {/* carousel inner */}
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-intervel="1000">
            <img src="https://promos.makemytrip.com/images/oberoi-tb-dt2-230623.webp"className='w-100 ' alt=""/>
            {/* carousel-caption */}
            
          </div>
          <div class="carousel-item" data-bs-intervel="1000">
          <img src="https://promos.makemytrip.com/images/trains-tg-tb-dt.jpg" className='w-100' alt=""/>
            {/* carousel-caption */}
            
          </div>
          <div class="carousel-item" data-bs-intervel="1000">
          <img src="https://promos.makemytrip.com/images/excessBaggage-tb-dt-050922.webp" className='w-100 h-100' alt=""/>
            {/* carousel-caption */}
            
          </div>
        </div>
        {/* carousel controls */}
        <button
          class="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#cr"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#cr"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      <br />
      <br />

      {/* Card */}
      <div className='container'>
      <div class="card1 mx-auto shadow w-100" >
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 px-3'>
          <div className='col px-6'>
            <br/>
            <br/>
          <div class="card mb-3 ">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://promos.makemytrip.com/notification/xhdpi//Desktop__MakeMyDay_31Jan@2x.jpg?" class="img-fluid rounded-start w-20" alt=".."/>
              </div>
           <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Be a Unique Traveller with 'MakeMyDay'</h5>
            <p class="card-text">Add local experiences, lesser-known gems & more authentic experiences to your holidays.</p>
            <p class="card-text"><small class="text-body-secondary">@terms and conditions apply</small></p>
          </div>
        </div>
      </div>
    </div>
    <br />
          </div>
          <div className='col px-6'>
            <br/>
            <br/>
          <div class="card mb-3 ">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://promos.makemytrip.com/notification/xhdpi//Desktop-TCS-Holidays-30May.jpg?" class="img-fluid rounded-start w-20" alt=".."/>
              </div>
           <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Trip Guarantee on Trains!</h5>
            <p class="card-text">Waitlisted tickets no more. Get a confirmed ticket or a free upgrade to flights,cabs & more. Grab your Packages now</p>
            <p class="card-text"><small class="text-body-secondary">@terms and conditions apply</small></p>
          </div>
        </div>
      </div>
    </div>
    <br />
          </div>
          <div className='col px-6'>
            <br/>
            <br/>
          <div class="card mb-3 ">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://promos.makemytrip.com/notification/xhdpi//116x116-ExtraBaggage-05092022.jpg" class="img-fluid rounded-start w-20" alt=".."/>
              </div>
           <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Carry Extra Baggaage @20%* Lower Prices!</h5>
            <p class="card-text">Now purchase EXCESS BAGGAGE allowance in advance & save BIG bucks on your journey.</p>
            <p class="card-text"><small class="text-body-secondary">@terms and conditions apply</small></p>
          </div>
        </div>
      </div>
    </div>
    <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      </div>

{/* faqs */}
<div className='container'>
  <h1 className='display-lead text-primary shadow'><b>FAQs - Frequently Asked Question's</b></h1>
  <hr/>

<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Why MakeMyTrip?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">  MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        What are the Offers and Great Deals on MakeMyTrip?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Why Book Holidays with MakeMyTrip?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer’s queries and concerns.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What does MakeMyTrip Holidays offer?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">MakeMyTrip offers a hassle-free holiday wherein all your travel needs are taken care of. Be it your accommodation in comfortable hotels, convenient transfers, varied sightseeing options and an array of activities to choose from, delectable meals and niche experiences - the holiday packages are designed such to offer you an unparalleled experience.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How to book Holidays with MakeMyTrip?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The user-friendly MakeMyTrip App and website make it easy for enthusiastic travellers to plan and book a holiday simply at the click of a button. Just use the filters and select the city you want to visit along with your travel dates, travel duration, specific preferences, if any, on hotels, kind of holiday, etc. </div>
    </div>
  </div>
  
</div>
</div>

<br/>
<br/>
        </div>
    )
}

export default Home1

