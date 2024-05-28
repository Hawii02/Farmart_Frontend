import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CartContext } from './MyCartContext';
import Footer from './Footer'
import NavBar from './NavBar';
import "./AnimalDetails.css"

function AnimalDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [animal, setAnimal] = useState(null);  
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const animalData = location.state?.animal;  
    if (animalData) {
      setAnimal(animalData);
    }
  }, [id]);  

  if (!animal) {
    return <div>Loading...</div>;
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
        < NavBar />
        <li key={animal.id} className='animal-details-card'>
            <div className='image-container'>
                <img className='animal-details-image' src={animal.image_url} alt={animal.name} />
            </div>
            <div className='animal-details-click'>
                <h2>{capitalizeFirstLetter(animal.type)} - Ksh. {animal.price}</h2>
                <div className="additional-animal-details">
                    <>
                    <h5>Breed: {animal.breed}</h5>
                    <div>
                        <button className="animal-details-buttons" onClick={() => addToCart(animal)}>
                            Add to Cart
                        </button>
                    </div>
                    <div>
                        <h5>Description: </h5>
                        <p>{animal.description}</p>
                        <Link to="/cart">
                            <button className="animal-details-buttons" >
                                Go to Cart
                            </button>
                        </Link>            
                    </div>
                    <div className='continue-shopping'>
                        <Link to="/">
                            <button className="continue-shopping-button">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                    </>  
                </div> 
            </div>
         </li>
      < Footer />
    </div>
  );
}

export default AnimalDetails;