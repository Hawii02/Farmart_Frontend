import React, { useState } from 'react';
import './AddAnimal.css'; // Import the CSS file

function AddAnimal () {
  const [animalData, setAnimalData] = useState({
    type: '',
    breed: '',
    image_url: '',
    price: '',
    description: '' // Added to include a description field if needed
  });

  function handleChange (e) {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  };

  function handleSubmit (e) {
    e.preventDefault();

    fetch('https://farmart-backend-6.onrender.com/farmer/animals', { // Ensure the URL matches your backend endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalData)
    })
    .then((response) => response.json()) // This assumes the server responds with JSON-formatted text
    .then((data) => {
      if (data.message) {
        console.log(data.message); // Display success message from server
        // Optionally reset the form here
        setAnimalData({
          type: '',
          breed: '',
          image_url: '',
          price: '',
          description: ''
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
          Description:
          <textarea
            name="description"
            value={animalData.description}
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



