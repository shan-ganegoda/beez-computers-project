import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { FaPhoneAlt, FaClock} from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/home.css';
import '../styles/overly.css';
import Navbar from '../pages/Navbar';  
import Footer from './Footer';

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const goToCartPage = () => {
    navigate('/cart', { state: { cart } });
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const handleSignOut = () => {
    navigate('/login');

  };
  const [showMore, setShowMore] = useState(false);

const handleReadMoreClick = () => {
  setShowMore(!showMore);
};


  return (
    <div className="relative">
     
     <Container
      fluid
      className="bg-light py-4"
      style={{
        maxWidth: '100%',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Row className="align-items-center">
        {/* BEEZ COMPUTER SERVICE  */}
        <Col xs={12} md={4} className="text-md-left text-center mb-2 mb-md-0">
          <h1 className="m-0" style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
            BEEZ COMPUTER SERVICE
          </h1>
        </Col>

        {/* Contact Information */}
        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
          <div className="d-flex align-items-center mx-3">
            <FaPhoneAlt size={25} className="mx-2 text-dark" />
            <div>
              <p className="m-0" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                PHONE
              </p>
              <p className="m-0" style={{ fontSize: '1rem', fontWeight: '700' }}>
                071-5386140
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center mx-3">
            <FaClock size={25} className="mx-2 text-dark" />
            <div>
              <p className="m-0" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                OPEN HOURS
              </p>
              <p className="m-0" style={{ fontSize: '1rem', fontWeight: '700' }}>
                MON-SAT: 10AM TO 6PM
              </p>
            </div>
          </div>
        </Col>

        {/* Book Appointment Button  */}
        <Col xs={12} md={4} className="d-flex justify-content-md-end justify-content-center">
          <a href="/form">
            <Button
              className="shadow-sm px-4 py-2"
              style={{
                backgroundColor: '#254c4d',
                border: 'none',
                color: '#fff',
                borderRadius: '50px',
                transform: hover ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              BOOK APPOINTMENT
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
      {/*  Navbar  */}
      <Navbar currentPath="/"  />

      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src="https://i.postimg.cc/c1vN2385/R-6.png"
              className="d-block w-100"
              alt="First Slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
            <div className="carousel-item-content carousel-caption d-none d-md-block"style={{ textAlign: 'left' }}>
              <h5 style={{ fontSize: '34px' }}>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm </h5>
               
               <button
                   onClick={handleReadMoreClick}
                  style={{
                    border: '2px solid #000',  
                    padding: '10px 20px',      
                    backgroundColor: '#000000',
                    borderRadius: '5px',       
                    cursor: 'pointer',         
                  }}
                  >
                    {showMore ? 'SHOW LESS' : 'READ MORE'}
                  </button>

      
      {/* Conditionally render more content */}
      {showMore && (
        <div className="more-content" style={{ marginTop: '10px' }}>
          <p>This is the extra content that appears when you click 'READ MORE'. You can add detailed information, images, or any other elements here.</p>
        </div>
      )}
            </div>
          </div>
          <div className="carousel-item active ">
            <img
              src="https://i.postimg.cc/sfZVWsNg/istockphoto-1499410369-1024x1024.jpg"
              className="d-block w-100"
              alt="First Slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
            <div className="carousel-item-content carousel-caption d-none d-md-block"style={{ textAlign: 'left' }}>
              <h5 style={{ fontSize: '34px' }}>Ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h5>
              <button
                   onClick={handleReadMoreClick}
                  style={{
                    border: '2px solid #000',  
                    padding: '10px 20px',      
                    backgroundColor: '#000000',
                    borderRadius: '5px',       
                    cursor: 'pointer',         
                  }}
                  >
                    {showMore ? 'SHOW LESS' : 'READ MORE'}
                  </button>
      
      {/* Conditionally render more content */}
      {showMore && (
        <div className="more-content" style={{ marginTop: '10px' }}>
          <p>This is the extra content that appears when you click 'READ MORE'. You can add detailed information, images, or any other elements here.</p>
        </div>
      )}
            </div>
          </div>
          <div className="carousel-item active ">
            <img
              src="https://i.postimg.cc/CMjxtwH6/R.jpg"
              className="d-block w-100"
              alt="First Slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="overlay"></div>
            <div className="carousel-item-content carousel-caption d-none d-md-block"style={{ textAlign: 'left' }}>
              <h5 style={{ fontSize: '34px' }}>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h5>
              <button
                   onClick={handleReadMoreClick}
                  style={{
                    border: '2px solid #000',  
                    padding: '10px 20px',      
                    backgroundColor: '#000000',
                    borderRadius: '5px',       
                    cursor: 'pointer',         
                  }}
                  >
                    {showMore ? 'SHOW LESS' : 'READ MORE'}
                  </button>
      
      {/* Conditionally render more content */}
      {showMore && (
        <div className="more-content" style={{ marginTop: '10px' }}>
          <p>This is the extra content that appears when you click 'READ MORE'. You can add detailed information, images, or any other elements here.</p>
        </div>
      )}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Services Section */}
<motion.section
  className="container mx-auto p-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <section id="services" className="py-5">
    <Container className="text-center">
      <h2 className="text-3xl font-bold mb-4 underline">OUR SERVICES</h2>
      <Row>
        <Col md={3} sm={6} className="mb-4">
          <Card className="shadow-sm rounded">
            <div
              style={{
                overflow: 'hidden',
                
              }}
            >
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/MK5dsN7y/DALL-E-2024-08-30-11-41-54-A-sleek-and-modern-icon-representing-laptop-repair-This-icon-features.webp"
                style={{
                  transition: 'transform 0.3s ease',
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius:'20px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <Card.Body className="bg-dark text-white"style={{ borderRadius: '10px' }}>
              <Card.Title>LAPTOP REPAIR</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="shadow-sm rounded">
            <div
              style={{
                overflow: 'hidden',
              }}
            >
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/4y5bSH9J/DALL-E-2024-08-30-11-44-18-A-minimalist-and-modern-desktop-computer-icon-The-icon-features-a-fron.webp"
                style={{
                  transition: 'transform 0.3s ease',
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius:'20px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <Card.Body className="bg-dark text-white"style={{ borderRadius: '10px' }}>
              <Card.Title>DESKTOP REPAIR</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="shadow-sm rounded">
            <div
              style={{
                overflow: 'hidden',
              }}
            >
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/wBhL7sj9/DALL-E-2024-08-30-10-57-25-A-black-and-white-image-representing-software-repair-The-scene-feature.webp"
                style={{
                  transition: 'transform 0.3s ease',
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius:'20px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <Card.Body className="bg-dark text-white "style={{ borderRadius: '10px' }}>
              <Card.Title>SOFTWARE REPAIR</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-4">
          <Card className="shadow-sm rounded">
            <div
              style={{
                overflow: 'hidden',
              }}
            >
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/PxyDMsDc/DALL-E-2024-08-30-10-58-11-A-black-and-white-image-representing-an-online-store-The-scene-feature.webp"
                style={{
                  transition: 'transform 0.3s ease',
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius:'20px',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <Card.Body className="bg-dark text-white"style={{ borderRadius: '10px' }}>
              <Card.Title>ONLINE STORE</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
</motion.section>

      <Footer/>
    </div>
  );
};

export default HomePage;
