import React, { useState, useEffect, useContext } from 'react';
import "./Home.css";
import Sidebar from './Sidebar';
import Footer from './Footer';
import { CartContext } from './MyCartContext';
import HomeSliders from './HomeSliders';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

function Home () {
  /*Setting states for loading the DOM, all animals and selecting categories*/
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allAnimals, setAllAnimals] = useState([]);
  ///const [allAnimals, setAllAnimals] = useState(animals);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  ///const [showAnimalDetails, setShowAnimalDetails] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  
  const categories = [
    { id: 1, name: 'Poultry' },
    { id: 2, name: 'Livestock' },
    { id: 3, name: 'Equines' },
    { id: 4, name: 'Camelids'},
    { id: 5, name: 'Apiary'},
    { id: 6, name: 'Aquaculture'},
    { id: 7, name: 'Exotic_animals' },
    { id: 8, name: 'Small_mammals' },
    { id: 9, name: 'Other' }
  ];

  /*Funtion to fetch all animals when the DOM loads*/
  useEffect (() => {
    fetch ("https://farmart-backend-6.onrender.com/animals")
    .then ((response) => response.json())
    .then ((data) => {
        /*After fetching the data, the animals are loaded, and the isLoaded state changes to true*/
        setIsLoaded(true);
        /*Sets the animals state with the fetched data */
        setAllAnimals(data);
        setFilteredAnimals(data);
    })
    /*error handling that sets the isError state */
    .catch((error) => {
        setIsError(true);
        console.error('Error loading animals:', error);
    });
    
  }, []); /*There are no dependencies for the useEffect as it will be rendered only after loading, hence an empty array */

  /*Funcion to filter the animals when state changes for the selectedCategory*/
  function filterAnimalsByCategory(category_id) {
    if (category_id === null) {
      setFilteredAnimals(allAnimals);
    } else {
      const animalsFiltered = allAnimals.filter(animal => animal.category_id === category_id);
      setFilteredAnimals(animalsFiltered);
    }
  }

  /*Function to handle category selection*/
  function handleCategoryClick(category_id) {
    if (category_id === selectedCategory) {
      return;
    }
    
    if (category_id === 'all-animals') {
      setSelectedCategory(null); 
      setFilteredAnimals(allAnimals); 
    } else {
      setSelectedCategory(category_id);
      filterAnimalsByCategory(category_id);
    }
  }

  /*Function to filter animals by search term*/
  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const animalsFiltered = allAnimals.filter(animal => 
      animal.breed?.toLowerCase().includes(searchTerm) || 
      animal.type?.toLowerCase().includes(searchTerm)
   );
    setFilteredAnimals(animalsFiltered);
  }

  const filterAnimals = () => {
    let filtered = allAnimals;

    if (selectedCategory) {
      filtered = filtered.filter(animal => animal.category_id === selectedCategory);
    }
    if (selectedType) {
      filtered = filtered.filter(animal => animal.type.toLowerCase() === selectedType.toLowerCase());
    }
    if (selectedBreed) {
      filtered = filtered.filter(animal => animal.breed.toLowerCase() === selectedBreed.toLowerCase());
    }
    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      filtered = filtered.filter(animal => animal.price >= min && animal.price <= max);
    }
    if (selectedAvailability) {
      filtered = filtered.filter(animal => animal.status.toLowerCase() === selectedAvailability.toLowerCase());
    }
    if (searchTerm) {
      filtered = filtered.filter(animal => 
        animal.breed?.toLowerCase().includes(searchTerm) || 
        animal.type?.toLowerCase().includes(searchTerm)
      );
    }
    setFilteredAnimals(filtered);
  };

  useEffect(() => {
    filterAnimals();
  }, [selectedCategory, selectedType, selectedBreed, selectedPriceRange, selectedAvailability, searchTerm]);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /*Renders if there is an error with DOM loading */
  if (isError) {
    return <div>Error occurred while loading data</div>;
  }

  /*Renders when the DOM loads but the animals are not fetched */
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        < Navbar  />
        < HomeSliders />
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
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedBreed={selectedBreed}
              setSelectedBreed={setSelectedBreed}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              selectedAvailability={selectedAvailability}
              setSelectedAvailability={setSelectedAvailability}
            />
          </div>
  
          <div className='home-container'>
          {/*Rendering the category buttons*/}
          <div >
            <button className='category-buttons' onClick={() => handleCategoryClick('all-animals')}>All Animals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(1)}>Poultry</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(2)}>Livestock</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(3)}>Equines</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(6)}>Aquaculture</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(4)}>Camelids</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(5)}>Apiary</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(7)}>Exotic Animals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(8)}>Small Mammals</button>
            <button className='category-buttons' onClick={() => handleCategoryClick(9)}>Other</button>
          </div>

          {/*Rendering the animals*/}
          <div className='animals'>
            <ul>
              {filteredAnimals.map((animal) => (
                <li key={animal.id} className='animal-card'>
                  <div className='image-container'>
                    <Link to={'/animal/${animal.id}'} state={{animal}}>
                      <img className='images' src={animal.image_url} alt={animal.name} />
                    </Link>
                  </div>
                  <div className='animal-details'>
                  <div className="animal-type">
                    {capitalizeFirstLetter(animal.type)} 
                    </div>
                  <div className='animal-price'>
                    Ksh. {animal.price}
                    </div>
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
      < Footer />
      </div>
  )
}

export default Home