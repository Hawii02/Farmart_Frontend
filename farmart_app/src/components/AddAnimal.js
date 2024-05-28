// import React, { useState } from 'react';
// import './AddAnimal.css'; // Import the CSS file


// function AddAnimal () {
//   const [animalData, setAnimalData] = useState({
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

//   function handleChange (e) {
//     const { name, value } = e.target;
//     setAnimalData({ ...animalData, [name]: value });
//   };

//   function handleSubmit (e) {
//     e.preventDefault();

//     fetch('https://farmart-backend-6.onrender.com/farmer/animals', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(animalData)
//     })
//     .then((response) => {
//       if (response.ok) {
//         console.log('Animal added successfully!');
//         // Reset the form fields after successful submission
//         setAnimalData({
//           // category: '',
//           // type: '',
//           // breed: '',
//           // image_url: '',
//           // price: 0,
//           // farmer_id: ''
//           type: '',
//           breed: '',
//           price: 0,
//           description: '',
//           image_url: '',
//           status: ''
//         });
//       } else {
//         console.error('Failed to add animal');
//       }
//     })
//     .catch((error) => {
//       console.error('Error adding animal:', error);
//     });
//   };

//   return (
//     <div className="add-animal-container">
//       <h2 className="add-animal-title">Add New Animal</h2>
//       <form className="add-animal-form" onSubmit={handleSubmit}>
//         <label className="add-animal-label">
//           Type:
//           <input
//             type="text"
//             name="type"
//             value={animalData.type}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <label className="add-animal-label">
//           Breed:
//           <input
//             type="text"
//             name="breed"
//             value={animalData.breed}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <label className="add-animal-label">
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={animalData.price}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <label className="add-animal-label">
//           Description:
//           <input
//             type="text"
//             name="description"
//             value={animalData.description}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <label className="add-animal-label">
//           image_url:
//           <input
//             type="text"
//             name="image_url"
//             value={animalData.image_url}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <label className="add-animal-label">
//           Status:
//           <input
//             type="text"
//             name="status"
//             value={animalData.status}
//             onChange={handleChange}
//             className="add-animal-input"
//           />
//         </label>
//         <button type="submit" className="add-animal-button">Add Animal</button>
//       </form>
//     </div>
//   );
// };

// export default AddAnimal;



import React, { useState } from 'react';
import './AddAnimal.css';

function AddAnimal() {
  const [animalData, setAnimalData] = useState({
    type: '',
    breed: '',
    price: 0,
    description: '',
    image_url: '',
    farmer_id: 0
  });

  const [message, setMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('https://farmart-backend-6.onrender.com/farmer/animals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
      },
      body: JSON.stringify(animalData)
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse JSON response
        }
        throw new Error('Failed to add animal');
      })
      .then((data) => {
        console.log('Animal added successfully!', data);
        setMessage('Animal added successfully!');
        // Reset the form fields after successful submission
        setAnimalData({
          type: '',
          breed: '',
          price: 0,
          description: '',
          image_url: '',
          farmer_id: 0
        });
      })
      .catch((error) => {
        console.error('Error adding animal:', error);
        setMessage('Failed to add animal');
      });
  }

  return (
    <div className="add-animal-container">
      <h2 className="add-animal-title">Add New Animal</h2>
      {message && <p>{message}</p>}
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
          <input
            type="text"
            name="description"
            value={animalData.description}
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
          Farmer Id:
          <input
            type="number"
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
}

export default AddAnimal;

