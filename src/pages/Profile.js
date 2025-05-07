import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPso8yha9Y63fjz7GWsz2I6DFgIQ59JLl3w&s";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/userprofile");
        if (response.data.length > 0) {
          setProfile(response.data[response.data.length - 1]); // Get the last profile
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
    <Header/>
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center shadow-lg">
            <Card.Body>
              {profile && (
                <>
                    <img
                      src={profile.image || defaultImage}
                      alt="Profile"
                      className="rounded-circle mb-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                  <h3>{localStorage.getItem("username") || ""}</h3>
                  <hr />
                  <div className="text-start">
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Location:</strong> {profile.address}</p>
                    <p><strong>Phone:</strong> {profile.mobileNumber}</p>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="outline-primary" className="mx-2"  onClick={() => navigate('/profilePage')}>
                      Back to update
                    </Button>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Profile;
