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

    fetch({}, {
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
    <div className="container">
      <h2>Update Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Animal ID:
          <input
            type="text"
            name="id"
            value={animalData.id}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={animalData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={animalData.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={animalData.breed}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={animalData.image_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={animalData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={animalData.farmer_id}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Animal</button>
      </form>
    </div>
  );
}

export default UpdateAnimal;