import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateAnimal.css';

const UpdateAnimal = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://farmart-backend-6.onrender.com/animals')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedAnimal({ ...selectedAnimal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://farmart-backend-6.onrender.com/farmer/animals/${selectedAnimal.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedAnimal)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to update animal: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Animal updated successfully!');
        setSelectedAnimal(null);
        setAnimals(animals.map(animal => animal.id === selectedAnimal.id ? data : animal));
      })
      .catch((error) => {
        setMessage('Error updating animal: ' + error.message);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://farmart-backend-6.onrender.com/farmer/animals/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete animal: ${response.statusText}`);
        }
        setMessage('Animal deleted successfully!');
        setAnimals(animals.filter((animal) => animal.id !== id));
        if (selectedAnimal && selectedAnimal.id === id) {
          setSelectedAnimal(null);
        }
      })
      .catch((error) => {
        setMessage('Error deleting animal: ' + error.message);
      });
  };

  const handleGoBack = () => {
    navigate(-1); // This will navigate to the previous page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (animals.length === 0) {
    return <div>No animals found.</div>;
  }

  return (
    <div className="update-animal-container">
      <h2 className="update-animal-title">Update Animal</h2>
      <button onClick={handleGoBack} className="go-back-button">Go Back</button>
      <div className="animal-cards-container">
        {animals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img src={animal.image_url} alt={animal.breed} className="animal-card-image" />
            <div className="animal-card-details">
              <div>Type: {animal.type}</div>
              <div>Breed: {animal.breed}</div>
              <div>Price: Kes. {animal.price}</div>
              <button onClick={() => setSelectedAnimal(animal)} className="animal-card-button">
                Edit
              </button>
              <button onClick={() => handleDelete(animal.id)} className="animal-card-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <form className="update-animal-form" onSubmit={handleSubmit}>
          <label className="update-animal-label">
            Animal ID:
            <input
              type="text"
              name="id"
              value={selectedAnimal.id}
              onChange={handleChange}
              className="update-animal-input"
              disabled
            />
          </label>
          <label className="update-animal-label">
            Category:
            <input
              type="text"
              name="category"
              value={selectedAnimal.category}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <label className="update-animal-label">
            Type:
            <input
              type="text"
              name="type"
              value={selectedAnimal.type}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <label className="update-animal-label">
            Breed:
            <input
              type="text"
              name="breed"
              value={selectedAnimal.breed}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <label className="update-animal-label">
            Image URL:
            <input
              type="text"
              name="image_url"
              value={selectedAnimal.image_url}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <label className="update-animal-label">
            Price:
            <input
              type="number"
              name="price"
              value={selectedAnimal.price}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <label className="update-animal-label">
            Farmer ID:
            <input
              type="text"
              name="farmer_id"
              value={selectedAnimal.farmer_id}
              onChange={handleChange}
              className="update-animal-input"
            />
          </label>
          <button type="submit" className="update-animal-button">Update Animal</button>
        </form>
      )}
      {message && <p className="update-animal-message">{message}</p>}
    </div>
  );
}

export default UpdateAnimal;
