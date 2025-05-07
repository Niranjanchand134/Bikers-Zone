import React from 'react';
import Footer from "../components/Footer";
import Headers from "../components/Header";


const AboutPage = () => {
  return (
    <>
      <Headers />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Bikers zone stands as the premier online destination for buying and selling motorbikes in Nepal.
        Offering a user-friendly platform, it boasts a diverse range of listings catering to all preferences
        and budgets. With an emphasis on reliability and transparency.

        Bikers zone fosters trust among its users. Whether one is in search of a commuter-friendly scooter
        or a high-performance sports bike, this site provides a comprehensive marketplace, promoting motorcycle 
        culture throughout Nepal.
        </p>

        <h2 className="text-center py-4">Top Brand Bikes In <span>NEPAL</span></h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/bajaj.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Bajaj</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/ktm.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">KTM</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/yamaha.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">YAMAHA</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="./assets/hondacd.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Honda</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage