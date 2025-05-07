import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDownload, faPlus, faUsers, faDollarSign, 
  faShoppingCart, faChartLine, faArrowUp, 
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);  // State for user count
  const [productCount, setProductCount] = useState(0); // State for total products

  // Fetch both user count and product count on component mount
  useEffect(() => {
    fetchUserCount();
    fetchProductCount();
  }, []);

  // Fetch total users from backend
  const fetchUserCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/userprofile");
      setUserCount(response.data.length); // Set user count dynamically
    } catch (error) {
      console.error("Error fetching user count:", error);
    }
  };

  // Fetch total products from backend
  const fetchProductCount = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ads");
      setProductCount(response.data.length); // Set product count dynamically
    } catch (error) {
      console.error("Error fetching product count:", error);
    }
  };

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="fw-bold">Dashboard</h4>
          </div>
          <div className="col-md-6 text-md-end">
            <button className="btn btn-outline-dark me-2">
              <FontAwesomeIcon icon={faDownload} className="me-1" />
              Export
            </button>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} className="me-1" />
              Add New
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="row">
          {/* Total Users Card */}
          <div className="col-md-3 mb-4">
  <div className="card border-0 shadow-lg bg-light">
    <div className="card-body d-flex justify-content-between align-items-center">
      <div>
        <div className="h3 mb-0 text-dark">{userCount}</div> {/* Dynamic User Count */}
        <div className="text-muted">Total Users</div>
      </div>
      <div className="bg-primary text-white rounded-circle p-3">
        <FontAwesomeIcon icon={faUsers} size="lg" />
      </div>
    </div>
    <div className="card-footer text-success d-flex align-items-center">
      <FontAwesomeIcon icon={faArrowUp} className="me-2" />
      <span>12.5% from last month</span>
    </div>
  </div>
</div>

{/* Total Products Card (New) */}
<div className="col-md-3 mb-4">
  <div className="card border-0 shadow-lg bg-light">
    <div className="card-body d-flex justify-content-between align-items-center">
      <div>
        <div className="h3 mb-0 text-dark">{productCount}</div> {/* Dynamic Product Count */}
        <div className="text-muted">Total Products</div>
      </div>
      <div className="bg-info text-white rounded-circle p-3">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </div>
    </div>
    <div className="card-footer text-success d-flex align-items-center">
      <FontAwesomeIcon icon={faArrowUp} className="me-2" />
      <span>10% from last month</span>
    </div>
  </div>
</div>


          {/* Total Revenue Card */}
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="h4 mb-0">$12,750</div>
                  <div>Total Revenue</div>
                </div>
                <div className="bg-primary text-white rounded-circle p-3">
                  <FontAwesomeIcon icon={faDollarSign} size="lg" />
                </div>
              </div>
              <div className="card-footer text-success d-flex align-items-center">
                <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                <span>8.2% from last month</span>
              </div>
            </div>
          </div>

          {/* Conversion Rate Card */}
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="h4 mb-0">85%</div>
                  <div>Conversion Rate</div>
                </div>
                <div className="bg-warning text-white rounded-circle p-3">
                  <FontAwesomeIcon icon={faChartLine} size="lg" />
                </div>
              </div>
              <div className="card-footer text-success d-flex align-items-center">
                <FontAwesomeIcon icon={faArrowUp} className="me-2" />
                <span>4.6% from last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
