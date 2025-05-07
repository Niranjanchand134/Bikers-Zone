import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { showSuccessToast, showErrorToast } from "./Toastify.Util";
import { Navigate } from "react-router-dom";
import Input from "antd/es/input/Input";

const ProfilePage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    address: "",
    mobileNumber: "",
    images: "",
  });
  const [redirect, setRedirect] = useState(false);  // State to trigger redirect

  // Load username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setProfileData((prevState) => ({
        ...prevState,
        username: storedUsername,
      }));
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission (Only POST data)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/userprofile", profileData);
      showSuccessToast("Profile updated successfully!");

      // Save updated profile in localStorage
      localStorage.setItem("profile", JSON.stringify(profileData));

      setRedirect(true);  // Set redirect to true after successful update
    } catch (error) {
      showErrorToast("Error submitting form:", error);
    }
  };

  // If redirect is true, navigate to the profile page
  if (redirect) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6} className="mx-auto">
            <div className="shadow p-4 rounded bg-white">
              <h2 className="text-center">Update Profile</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" value={profileData.username} readOnly />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    placeholder="Enter address"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobileNumber"
                    value={profileData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3 w-100">
                  Update
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
