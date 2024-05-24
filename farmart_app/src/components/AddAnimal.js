import React, { useState } from 'react';
import './AddAnimal.css'; // Import the CSS file


function AddAnimal () {
  const [animalData, setAnimalData] = useState({
    category: '',
    type: '',
    breed: '',
    image_url: '',
    price: 0,
    farmer_id: '' 
  });

  function handleChange (e) {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  function handleSubmit (e) {
    e.preventDefault();

    fetch('https://farmart-backend-6.onrender.com/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalData)
    })
    .then((response) => {
      if (response.ok) {
        console.log('Animal added successfully!');
        // Reset the form fields after successful submission
        setAnimalData({
          category: '',
          type: '',
          breed: '',
          image_url: '',
          price: 0,
          farmer_id: ''
        });
      } else {
        console.error('Failed to add animal');
      }
    })
    .catch((error) => {
      console.error('Error adding animal:', error);
    });
  };

  return (
    <div className="add-animal-container">
      <h2 className="add-animal-title">Add New Animal</h2>
      <form className="add-animal-form" onSubmit={handleSubmit}>
        <label className="add-animal-label">
          Category:
          <input
            type="text"
            name="category"
            value={animalData.category}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <label className="add-animal-label">
          Type:
          <input
            type="text"
            name="type"
            value={animalData.type}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <label className="add-animal-label">
          Breed:
          <input
            type="text"
            name="breed"
            value={animalData.breed}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <label className="add-animal-label">
          Image URL:
          <input
            type="text"
            name="image_url"
            value={animalData.image_url}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <label className="add-animal-label">
          Price:
          <input
            type="number"
            name="price"
            value={animalData.price}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <label className="add-animal-label">
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={animalData.farmer_id}
            onChange={handleChange}
            className="add-animal-input"
          />
        </label>
        <button type="submit" className="add-animal-button">Add Animal</button>
      </form>
    </div>
  );
};

export default AddAnimal;


