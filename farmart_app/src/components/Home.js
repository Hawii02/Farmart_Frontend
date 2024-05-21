import React, { useState, useEffect, useContext } from 'react';
import "./Home.css";
import Sidebar from './Sidebar';
import Footer from './Footer';
import { CartContext } from './MyCartContext';
import HomeSliders from './HomeSliders';
import { Link } from 'react-router-dom';

function Home () {
  // Setting states for loading the DOM, all animals, and selecting categories
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allAnimals, setAllAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    fetch("https://farmart-backend-6.onrender.com/animals")
      .then(response => response.json())
      .then(data => {
        // After fetching the data, the animals are loaded, and the isLoaded state changes to true
        setIsLoaded(true);
        // console.log(data.farmart, "Leon you're lying!!!!!");
      
        setAllAnimals(data);
        setFilteredAnimals(data);
      })
      // Error handling 
      .catch(error => {
        setIsError(true);
        console.error('Error loading animals:', error);
      });
  }, []); // Empty dependency array means this useEffect runs once after initial render

  // Function to filter the animals when state changes for the selectedCategory
  function filterAnimalsByCategory(category) {
    if (category === null || category === 'all-animals') {
      setFilteredAnimals(allAnimals);
    } else {
      const animalsFiltered = allAnimals.filter(animal => animal.category.toLowerCase() === category.toLowerCase());
      setFilteredAnimals(animalsFiltered);
    }
  }

  // Function to handle category selection
  function handleCategoryClick(category) {
    if (category === selectedCategory) {
      return;
    }
    setSelectedCategory(category);
    filterAnimalsByCategory(category);
  }

  // Function to filter animals by search term
  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const animalsFiltered = allAnimals.filter(animal =>
      animal.breed.toLowerCase().includes(searchTerm) ||
      animal.category.toLowerCase().includes(searchTerm) ||
      animal.type.toLowerCase().includes(searchTerm)
    );
    setFilteredAnimals(animalsFiltered);
  }

  // Renders if there is an error with DOM loading
  if (isError) {
    return <div>Error occurred while loading data</div>;
  }

  // Renders when the DOM loads but the animals are not fetched
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HomeSliders />
      <div className='home-sidebar'>
        <div>
          <div className='search-bar'>
            <input
              type="text"
              placeholder="Search farm animals..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Sidebar />
        </div>
        <div className='home-container'>
          {/* Rendering the category buttons */}
          <div>
            <button className='category-buttons' onClick={() => handleCategoryClick('all-animals')}>All Animals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('poultry')}>Poultry</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('livestock')}>Livestock</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('equines')}>Equines</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('aquaculture')}>Aquaculture</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('camelids')}>Camelids</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('apiary')}>Apiary</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('exotic-animals')}>Exotic Animals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('small-mammals')}>Small Mammals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick('other')}>Other</button>
          </div>

          {/* Rendering the animals */}
          <div className='animals'>
            <ul>
              {console.log(filteredAnimals, "Real filtered animals")}
              {filteredAnimals.map((animal) => (
                <li key={animal.id} className='animal-card'>
                  <div className='image-container'>
                    <Link to={`/animals/${animal.id}`} state={{ animal }}>
                      <img className='images' src={animal.image_url} alt={animal.name} />
                    </Link>
                  </div>
                  <div className='animal-details'>
                    {animal.type} - Kes. {animal.price}
                  </div>
                  <div>
                    <button className="add-cart-button" onClick={() => addToCart(animal)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
