import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { showErrorToast } from "./Toastify.Util";

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

  const handleViewDetailClick = () => {
    navigate(`/editManageAd/${bike.id}`); // Pass the bike ID in the URL
  };
  

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={bike.images}
          className="card-img-top"
          alt={bike.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{bike.name}</h5>
          <p className="card-text">Year: {bike.year} - {bike.engine}</p>
          <p className="card-text">Mileage: {bike.mileage} | Condition: {bike.condition}</p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <strong>Rs. {bike.price}</strong>
            <button className="btn btn-primary" onClick={handleViewDetailClick}>
              ManageAd
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManageAds = () => {
  const navigate = useNavigate();
  const [bike, setBike] = useState(null);

  const handleCreateAdClick = () => {
    navigate("/createAd");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("is_login");
    if (isLogin !== "1") {
      showErrorToast("You have to login to manage an ad.");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ads");
      const filteredBikes = response.data.filter(bike => bike.brandModel && bike.price && bike.condition);
      
      if (filteredBikes.length > 0) {
        const lastBike = filteredBikes[filteredBikes.length - 1];
        setBike({
          id: lastBike.id,
          name: Array.isArray(lastBike.brandModel) ? lastBike.brandModel.join(" ") : lastBike.brandModel,
          price: lastBike.price,
          year: lastBike.makeYear,
          mileage: lastBike.kilometers,
          condition: lastBike.condition,
          description: lastBike.description,
          images: lastBike.images,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <h2 className="d-flex justify-content-center align-items-center position-relative">
          Manage ads
          <button className="btn btn-outline-dark m-0 position-absolute end-0 top-0" onClick={handleCreateAdClick}>
            Create ad
          </button>
        </h2>
        <p className="text-gray-600 text-sm text-center mb-0">
          Please complete the form below to post a bike Ad.
        </p>
        <div className="container mt-4">
          <div className="row justify-content-center align-items-center">
            {bike && <BikeCard bike={bike} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageAds;