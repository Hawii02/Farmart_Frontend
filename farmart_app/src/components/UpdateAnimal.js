import React, { useState } from 'react';
import './UpdateAnimal.css';

function UpdateAnimal() {
  const [animalData, setAnimalData] = useState({
    id: '',
    category: '',
    type: '',
    breed: '',
    image_url: '',
    price: 0,
    farmer_id: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/animals/${animalData.id}`, {  // Ensure URL is correctly specified
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalData)
    })
      .then((response) => {
        if (response.ok) {
          console.log('Animal updated successfully!');
          setAnimalData({
            id: '',
            category: '',
            type: '',
            breed: '',
            image_url: '',
            price: 0,
            farmer_id: ''
          });
        } else {
          console.error('Failed to update animal');
        }
      })
      .catch((error) => {
        console.error('Error updating animal:', error);
      });
  }

  return (
    <div className="update-animal-container">
      <h2 className="update-animal-title">Update Animal</h2>
      <form className="update-animal-form" onSubmit={handleSubmit}>
        <label className="update-animal-label">
          Animal ID:
          <input
            type="text"
            name="id"
            value={animalData.id}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Category:
          <input
            type="text"
            name="category"
            value={animalData.category}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Type:
          <input
            type="text"
            name="type"
            value={animalData.type}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Breed:
          <input
            type="text"
            name="breed"
            value={animalData.breed}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Image URL:
          <input
            type="text"
            name="image_url"
            value={animalData.image_url}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Price:
          <input
            type="number"
            name="price"
            value={animalData.price}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <label className="update-animal-label">
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={animalData.farmer_id}
            onChange={handleChange}
            className="update-animal-input"
          />
        </label>
        <button type="submit" className="update-animal-button">Update Animal</button>
      </form>
    </div>
  );
}

export default UpdateAnimal;
