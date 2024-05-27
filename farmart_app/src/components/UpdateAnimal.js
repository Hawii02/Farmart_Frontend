// import React, { useState } from 'react';
// import './UpdateAnimal.css';

// function UpdateAnimal() {
//   const [animalData, setAnimalData] = useState({
//     // id: '',
//     // category: '',
//     // type: '',
//     // breed: '',
//     // image_url: '',
//     // price: 0,
//     // farmer_id: ''

//     type: '',
//     breed: '',
//     price: 0,
//     description: '',
//     image_url: '',
//     status: ''
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setAnimalData({ ...animalData, [name]: value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     fetch('https://farmart-backend-6.onrender.com/farmer/animals/<int:animal_id>', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(animalData)
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Animal updated successfully!');
//           setAnimalData({
//             // id: '',
//             // category: '',
//             // type: '',
//             // breed: '',
//             // image_url: '',
//             // price: 0,
//             // farmer_id: ''
            
//             type: '',
//             breed: '',
//             price: 0,
//             description: '',
//             image_url: '',
//             status: ''
//           });
//         } else {
//           console.error('Failed to update animal');
//         }
//       })
//       .catch((error) => {
//         console.error('Error updating animal:', error);
//       });
//   }

//   return (
//     <div className="container">
//       <h2>Update Animal</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Type:
//           <input
//             type="text"
//             name="type"
//             value={animalData.type}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Breed:
//           <input
//             type="text"
//             name="breed"
//             value={animalData.breed}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={animalData.price}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Description:
//           <input
//             type="text"
//             name="description"
//             value={animalData.description}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Image URL:
//           <input
//             type="text"
//             name="image_url"
//             value={animalData.image_url}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Status:
//           <input
//             type="text"
//             name="status"
//             value={animalData.status}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Update Animal</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateAnimal;


// import React, { useState, useEffect } from 'react';

// const UpdateAnimal = () => {
//   const [animal, setAnimal] = useState({
//     type: '',
//     breed: '',
//     price: '',
//     status: '',
//     description: '',
//     imageUrl: '',
//     categoryId: '',
//     farmerId: ''
//   });

//   useEffect(() => {
//     // Fetch the animal data from the API
//     fetch('https://farmart-backend-6.onrender.com/farmer/animals')
//       .then(response => response.json())
//       .then(data => {
//         // Assuming the response contains an array of animals, we take the first one for this example
//         const animalData = data[0]; 
//         setAnimal(animalData);
//       })
//       .catch(error => {
//         console.error('Error fetching animal data:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAnimal(prevAnimal => ({
//       ...prevAnimal,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Make a PUT request to update the animal data
//     fetch(`https://farmart-backend-6.onrender.com/farmer/animals/${animal.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(animal)
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Animal updated successfully:', data);
//       })
//       .catch(error => {
//         console.error('Error updating animal:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Update Animal</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Type:
//           <input type="text" name="type" value={animal.type} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Breed:
//           <input type="text" name="breed" value={animal.breed} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input type="text" name="price" value={animal.price} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Status:
//           <input type="text" name="status" value={animal.status} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea name="description" value={animal.description} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Image URL:
//           <input type="text" name="imageUrl" value={animal.imageUrl} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Category ID:
//           <input type="text" name="categoryId" value={animal.categoryId} onChange={handleChange} />
//         </label>
//         <br />
//         <label>
//           Farmer ID:
//           <input type="text" name="farmerId" value={animal.farmerId} onChange={handleChange} />
//         </label>
//         <br />
//         <button type="submit">Update Animal</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateAnimal;



import React, { useState, useEffect } from 'react';
import './UpdateAnimal.css';

const UpdateAnimal = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://farmart-backend-6.onrender.com/animals')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok: ${response.statusText}");
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

    fetch("https://farmart-backend-6.onrender.com/farmer/animals/${selectedAnimal.id}", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedAnimal)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update animal: ${response.statusText}");
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
    fetch("https://farmart-backend-6.onrender.com/farmer/animals/${id}", {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete animal: ${response.statusText}");
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