import React, { useState } from 'react';
    
function AddAnimal() {
  const [animalData, setAnimalData] = useState({
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

    fetch("https://farmart-backend-6.onrender.com/animals", {
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
  }

  return (
    <div>
      <h2>Add New Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={animalData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={animalData.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={animalData.breed}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={animalData.image_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={animalData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={animalData.farmer_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}

export default AddAnimal;