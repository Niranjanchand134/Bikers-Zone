import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import  { showSuccessToast, showErrorToast } from "./Toastify.Util";
import { UserOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from "antd"; 

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleUserChange = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Retrieve the registered user from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if the user is "admin"
    if (user.username === "admin@gmail.com" && user.password === "admin") {
      localStorage.setItem("is_login", "1");
      localStorage.setItem("username", user.username); // Store username
      showSuccessToast('Admin login success');
      navigate("/admin/dashboard"); // Redirect to admin page
    } 
    // Check if the user matches registered data
    else if (storedUserData && user.username === storedUserData.username && user.password === storedUserData.password) {
      localStorage.setItem("is_login", "1");
      localStorage.setItem("username", user.username);
      showSuccessToast('login success');
      navigate("/"); // Redirect to home page
    } else {
      localStorage.setItem("is_login", "0");
      showErrorToast('Login Failed');
    }
  };

  return (
    <>
      <Header />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="my-3">
                <label className="form-label">Enter Your Username</label>
                <Input
                  type="text"
                  placeholder="Username"
                  onChange={handleUserChange}
                  required
                  prefix={<UserOutlined />} // ✅ Inline Icon
                />
              </div>

              <div className="my-3">
                <label className="form-label">Password</label>
                <Input.Password
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  required
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} // ✅ Inline Toggle Icon
                />
              </div>
              <div className="message text-center">{message}</div>
              <div className="my-3 text-center">
                <p>
                  New Here?{" "}
                  <Link to="/register" className="text-decoration-underline text-info">
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
