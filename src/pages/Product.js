import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

  const handleViewDetailClick = () => {
    navigate(`/viewDetail/${bike.id}`);
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
          <p className="card-text">
            Year: {bike.year} - {bike.engine}
          </p>
          <p className="card-text">
            Mileage: {bike.mileage} | Condition: {bike.condition}
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <strong>Rs. {bike.price}</strong>
            <button className="btn btn-primary" onClick={handleViewDetailClick}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);

  const handleCreateAdClick = () => {
    navigate("/createAd");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ads");
  
      // Filter out incomplete entries and format correctly
      const filteredData = response.data
        .filter((bike) => bike.brandModel && bike.price && bike.condition) // Remove invalid entries
        .map(({ id, brandModel, price, makeYear, kilometers, condition, description, images }) => ({
          id,
          name: Array.isArray(brandModel) ? brandModel.join(" ") : brandModel, // Handle array or string
          price,
          year: makeYear,
          mileage: kilometers,
          condition,
          description,
          images, // Handle empty images
        }));
  
      setBikes(filteredData);
      console.log("Filtered Bikes Data:", filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return (
    <>
      <Header />
        <div className="container mt-4">
          <div className="row justify-content-center align-items-center">
            {bikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Product;
