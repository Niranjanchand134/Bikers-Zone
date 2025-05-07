
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { Carousel } from "antd";
import Shop from "./Shop";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaUserPlus, FaCar, FaUser, FaCreditCard, Camera } from "react-icons/fa";
import { CameraOutlined } from "@ant-design/icons";



const imageStyle = {
  
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  width: "100%", 
  height: "400px", 
  objectFit: "cover",
  margin: "0 auto",  // Center the carousel horizontally
  maxWidth: "1300px",
  
};
const bikes = [
  {
    id: 1,
    name: "2021 Royal Enfield Classic 350",
    price: "Rs. 5,49,999",
    type: "Cruiser",
    engine: "346 cc",
    mileage: "16,500 km",
    location: "Jhapa",
    image: "./assets/royalbike.png",
    position: "relative",
  },
  {
    id: 2,
    name: "2020 Bajaj Pulsar 220F",
    price: "Rs. 2,00,000",
    type: "Sports",
    engine: "220 cc",
    mileage: "10,000 km",
    location: "Kathmandu",
    image: "./assets/pulsor220.png",
  },
  {
    id: 3,
    name: "2015 Honda CB Trigger",
    price: "Rs. 98,000",
    type: "Commuter",
    engine: "150 cc",
    mileage: "26,000 km",
    location: "Kathmandu",
    image: "./assets/Honda.png",
  },
  {
    id: 4,
    name: "2024 KTM Duke 200",
    price: "Rs. 5,50,000",
    type: "Sports Naked",
    engine: "200 cc",
    mileage: "600 km",
    location: "Kathmandu",
    image: "./assets/ktmduke.png",
  },
  {
    id: 5,
    name: "2023 KTM Adventure 250",
    price: "Rs. 5,20,000",
    type: "Touring",
    engine: "249 cc",
    mileage: "2,500 km",
    location: "Surkhet",
    image: "/assets/Advanturektm.png",
  },
  {
    id: 6,
    name: "2018 Bajaj Pulsar NS 200",
    price: "Rs. 1,60,000",
    type: "Sports Naked",
    engine: "200 cc",
    mileage: "37,600 km",
    location: "Kathmandu",
    image: "/assets/ns200.png",
  },
];

const BikeCard = ({ bike }) => {
  const navigate = useNavigate();

    const handleViewDetailClick = () => {
        navigate("/product");
    };

    
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={bike.image} className="card-img-top" alt={bike.name} style={{ height: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{bike.name}</h5>
          <p className="card-text">{bike.type} - {bike.engine}</p>
          <p className="card-text">{bike.mileage} | {bike.location}</p><hr/>
          <div className="d-flex justify-content-between align-items-center">
            <strong>{bike.price}</strong>
            <button className="btn btn-primary" onClick={handleViewDetailClick}>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Main = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/profile"); // Navigate to the desired page
  }; 

  const steps = [
    { icon: <FaUserPlus />, title: "Create a profile", text: "If you are going to use a passage of Lorem Ipsum, you need to be sure.", className: "bg-danger text-white" },
    { icon: <FaCar />, title: "Tell us which you want", text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.", className: "bg-primary text-white" },
    { icon: <FaUser />, title: "Match with seller", text: "It has survived not only five centuries, but also the leap into electronic.", className: "bg-success text-white" },
    { icon: <FaCreditCard />, title: "Make a deal", text: "There are many variations of passages of Lorem available, but the majority have suffered alteration.", className: "bg-purple text-white" }
  ];

  const categories = [
    { name: "Sports Naked", imgSrc: "./assets/nspng.png" },
    { name: "Sports", imgSrc: "./assets/r15.png" },
    { name: "Commuter", imgSrc: "./assets/hondapng.png" },
    { name: "Scooter", imgSrc: "./assets/scooter.png" },
    { name: "Cruiser", imgSrc: "./assets/avenger.png" },
    { name: "Dirt", imgSrc: "./assets/dirt.png" }
  ];
    return(
      <>
      <Carousel arrows infinite autoplay={{
        dotDuration: true,
      }}
      autoplaySpeed={3000}>
        {/* <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/assets/Cover1.jpg"}
            alt="Slide 1"
            className="d-block w-100"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-0.50 translate-middle-y text-start text-white">
            <h5 className="fs-2">Slide 1 Title</h5>
            <p className="fs-4">This is a description for slide 1.</p>
            <button className="btn btn-primary me-2 fs-5">Button 1</button>
            <button className="btn btn-secondary fs-5">Button 2</button>
          </div>
        </div> */}

        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/assets/cover2.jpg"}
            alt="Slide 2"
            className="d-block w-100"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50  translate-middle-y text-start text-white">
            <h5 className="fs-2">Buy and Sell Used Bikes in Nepal</h5>
            <p className="fs-4">Most trusted way to find used bikes in Nepal.</p>
            <Link to="/manageAd" className="btn btn-danger m-2">Buy Used Bikes</Link>
            <Link to="/createAd" className="btn btn-dark m-2">Sell My Bike</Link>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/assets/cover3.png"}
            alt="Slide 3"
            className="d-block w-100"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-1 translate-middle-y text-start text-white">
            <h5 className="fs-2">Buy and Sell Used Bikes in Nepal</h5>
            <p className="fs-4">Most trusted way to find used bikes in Nepal.</p>
            <Link to="/manageAd" className="btn btn-danger m-2">Buy Used Bikes</Link>
            <Link to="/createAd" className="btn btn-dark m-2">Sell My Bike</Link>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={process.env.PUBLIC_URL + "/assets/cover4.jpg"}
            alt="Slide 4"
            className="d-block w-100"
            style={imageStyle}
          />
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-1 translate-middle-y text-start text-white me-6">
            <h5 className="fs-2">Buy and Sell Used Bikes in Nepal</h5>
            <p className="fs-4">Most trusted way to find used bikes in Nepal.</p>
            <Link to="/manageAd" className="btn btn-danger m-2">Buy Used Bikes</Link>
            <Link to="/createAd" className="btn btn-dark m-2">Sell My Bike</Link>
          </div>
        </div>
      </Carousel>

      <Container className="text-center my-5">
      <h2 className="mb-4">Explore by category</h2><hr/>
      <Row className="justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={6} sm={4} md={2} className="text-center d-flex flex-column align-items-center">
            <img 
              src={category.imgSrc} 
              alt={category.name} 
              className="img-fluid" 
              style={{ width: "120px", height: "100px", objectFit: "cover" }}
            />
            <p className="mt-2">{category.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
      

    <div className="container mt-4">
      <Shop/>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Bike Listings</h2>
        <Link to="/product" className="btn btn-outline-dark m-2">View All</Link>
      </div>
      <div className="row">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>

    <Card className="text-center border-0 shadow p-4" style={{ borderRadius: "10px" }}>
      <Card.Body>
        <div className="d-flex justify-content-center mb-3">
          <div className="bg-danger text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>
          <CameraOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
        <Card.Title className="fw-bold">Sell on BikeBazar</Card.Title>
        <Card.Text className="text-muted">
          Reach thousands of potential buyers, create ads and manage ads with ease.
        </Card.Text>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/manageAd" className="btn btn-outline-dark m-2">Manage my ad</Link>
          <Link to="/createAd" className="btn btn-dark m-2">Create an ad</Link>
        </div>
      </Card.Body>
    </Card>

    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Get started with 4 simple steps</h2>
        <Row className="g-4 align-items-stretch">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="text-center p-3 shadow border-0 h-100 d-flex flex-column justify-content-between">
                <div className={`rounded-circle d-flex align-items-center justify-content-center ${step.className}`} style={{ width: "50px", height: "50px", margin: "0 auto 20px" }}>
                  {step.icon}
                </div>
                <Card.Body>
                  <Card.Title>{step.title}</Card.Title>
                  <Card.Text>{step.text}</Card.Text>
                </Card.Body>
                {index === 0 && <Button variant="primary" className="mt-auto" onClick={handleButtonClick}>Get Started</Button>}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
    );
}

export default Main;