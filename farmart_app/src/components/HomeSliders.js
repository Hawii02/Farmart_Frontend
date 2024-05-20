import React, { useState, useEffect } from 'react';
import "./HomeSliders.css"

function HomeSliders () {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming you have 5 images
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
        <div className={slideIndex === 0 ? "mySlides fade active" : "mySlides fade"}>
            <h2>Bringing the Farm to Your Fingertips - Shop Our Range of Happy Animals!</h2>
            <img src="https://images.unsplash.com/photo-1564851375740-1052e619dcbc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
        </div>
        <div className={slideIndex === 1 ? "mySlides fade active" : "mySlides fade"}>
            <h2>Discover the Joy of Farming with Our Diverse Range!</h2>
            <img src="https://images.unsplash.com/photo-1620136717591-841a4da27e23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
        </div>
        <div className={slideIndex === 2 ? "mySlides fade active" : "mySlides fade"}>
            <h2>Find Your Farming Soulmates - Start the Journey with Our Animals!</h2>
            <img src="https://images.unsplash.com/photo-1541689221361-ad95003448dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
        </div>
        <div className={slideIndex === 3 ? "mySlides fade active" : "mySlides fade"}>
            <h2>From Equines to Livestock, We've Got All Your Farming Needs Covered!</h2>
            <img src="https://images.unsplash.com/photo-1612225330565-f79af9f92168?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 4" />
        </div>
        <div className={slideIndex === 4 ? "mySlides fade active" : "mySlides fade"}>
            <h2>Whether Sheds or Stables, Your Farming Dream Awaits - Start Shopping!</h2>
            <img src="https://images.unsplash.com/photo-1596569646338-de6b8e53a0a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 5" />
        </div>
    </div>
  );
}

export default HomeSliders;