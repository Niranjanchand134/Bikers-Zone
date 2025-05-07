import Footer from "../components/Footer";
import {useNavigate } from "react-router";
import Header from "../components/Header";
import {FormOutlined} from '@ant-design/icons';
import axios from "axios";
import { useEffect, useState } from "react";
import { showSuccessToast } from "./Toastify.Util";

const SellBike = () => {
    const navigate = useNavigate();
    const [productCount, setProductCount] = useState(0); 

    useEffect(() => {
        fetchProductCount();
      }, []);

      const handleCreateClick = () => {
        const isLogin = localStorage.getItem('is_login');
        console.log("isLogin:", isLogin); // Debugging log
        if (isLogin !== '1') {
            showSuccessToast("You have to login to create an ad");
            navigate('/login');
        } else {
            navigate("/createAd");
        }
    };
    
    const handleManageClick = () => {
        navigate("/manageAd");
    };

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
        <Header/>
        <div class="container text-center mt-5">
            <div class="mb-10 md:mb-16 grid justify-center">
                    <p class="text-lg md:text-base text-center">
                    "{productCount}"
                    "items currently listed"
                    </p>
                    <h1 class="text-3xl text-center">Sell your bike the trusted way</h1>
            </div><br/>
        <div class="md:flex md:gap-10 md:justify-center md:mb-20">
            <div class="col-md-4">
                <div class="card">
                    <div class="icon">
                        <i className="fa fa-tag mr-1"></i>
                    </div>
                    <h5 class="mt-3">Create an ad</h5>
                    <p>List your bike today to reach thousands of potential buyers.</p>
                    <button type="button" class="btn btn-outline-dark m-2" onClick={handleCreateClick}>Create Ad</button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="icon">
                    <FormOutlined />
                    </div>
                    <h5 class="mt-3">Manage your ad</h5>
                    <p>Edit or make changes to your details, price, or photos of an existing ad.</p>
                    <button type="button" class="btn btn-outline-dark m-2" onClick={handleManageClick}>Manage ad</button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        
        </>
        
    );
}

export default SellBike;