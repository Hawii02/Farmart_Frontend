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




import React, { useState } from 'react';
import './UpdateAnimal.css';

function UpdateAnimal({ animalId }) { // Assuming animalId is passed as a prop
  const [animalData, setAnimalData] = useState({
    type: '',
    breed: '',
    price: 0,
    description: '',
    image_url: '',
    status: ''
  });

  const [message, setMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimalData({ ...animalData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://farmart-backend-6.onrender.com/farmer/animals/${animalId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalData)
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Assuming the API returns JSON
        }
        throw new Error('Failed to update animal');
      })
      .then((data) => {
        console.log('Animal updated successfully!', data);
        setMessage('Animal updated successfully!');
        setAnimalData({
          type: '',
          breed: '',
          price: 0,
          description: '',
          image_url: '',
          status: ''
        });
      })
      .catch((error) => {
        console.error('Error updating animal:', error);
        setMessage('Error updating animal');
      });
  }

  return (
    <div className="container">
      <h2>Update Animal</h2>
      <form onSubmit={handleSubmit}>
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
          Price:
          <input
            type="number"
            name="price"
            value={animalData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={animalData.description}
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
          Status:
          <input
            type="text"
            name="status"
            value={animalData.status}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Animal</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateAnimal;
