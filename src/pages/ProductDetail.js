import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BikeListing = () => {
  const { id } = useParams();
  const [bikeData, setBikeData] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Current ID:", id); // Debugging
    if (id) fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/ads/${id}`);
      console.log("API Response:", response.data);
      
      setBikeData(response.data);
      setError(null); // Reset error if data fetches successfully
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again later.");
    }
  };

  const handleCall = () => {
    if (!bikeData) return;
    navigator.clipboard.writeText(bikeData.contact);
    setShowContact(true);
    setTimeout(() => {
      window.location.href = `tel:${bikeData.contact}`;
    }, 500);
  };

  const handleEmail = () => {
    if (!bikeData) return;
    navigator.clipboard.writeText(bikeData.email);
    setShowEmail(true);
    setTimeout(() => {
      window.location.href = `mailto:${bikeData.email}`;
    }, 500);
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        {error ? (
          <p className="alert alert-danger">{error}</p>
        ) : bikeData ? (
          <div className="row">
            {/* Image Carousel */}
            <div className="col-md-6">
              <div id="bikeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={bikeData.images} alt="No Image Available" className="d-block w-100 rounded" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bikeCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bikeCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
              </div>
            </div>

            {/* Bike Details */}
            <div className="col-md-6">
              <h2 className="text-primary">{bikeData.brandModel}</h2>
              <h3 className="text-success">Rs. {bikeData.price}</h3>
              <div className="d-flex gap-2 mb-3">
                <button className="btn btn-primary" onClick={handleCall}>Call</button>
                <button className="btn btn-secondary" onClick={handleEmail}>Email</button>
              </div>
              {showContact && <div className="alert alert-info">{bikeData.contact}</div>}
              {showEmail && <div className="alert alert-info">{bikeData.email}</div>}
              <p>{bikeData.description}</p>

              {/* General Details */}
              <h5>General Details</h5>
              <ul className="list-group">
                <li className="list-group-item">Condition: {bikeData.condition}</li>
                <li className="list-group-item">Make Year: {bikeData.makeYear}</li>
                <li className="list-group-item">Kilometers: {bikeData.kilometers} km</li>
                <li className="list-group-item">Engine Size: {bikeData.engineSize} cc</li>
                <li className="list-group-item">Location: {bikeData.location}</li>
              </ul>
              <br />

              {/* Seller Details */}
              <h5>Seller Details</h5>
              <hr />
              <div className="text">Seller Name: {bikeData.name}</div>
            </div>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <br />
      <Footer />
    </>
  );
};

export default BikeListing;
