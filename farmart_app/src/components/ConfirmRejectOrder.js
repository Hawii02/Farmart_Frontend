// Work on these Manoti

import React, { useState } from 'react';
import './ConfirmRejectOrder.css';

function ConfirmRejectOrder() {
  const [orderData, setOrderData] = useState({
    order_id: '',
    status: 'pending',
    farmer_id: '',
    comments: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch( {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then((response) => {
        if (response.ok) {
          console.log('Order status updated successfully!');
          setOrderData({
            order_id: '',
            status: 'pending',
            farmer_id: '',
            comments: ''
          });
        } else {
          console.error('Failed to update order status');
        }
      })
      .catch((error) => {
        console.error('Error updating order status:', error);
      });
  };

  return (
    <div className="container">
      <h2>Confirm or Reject Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input
            type="text"
            name="order_id"
            value={orderData.order_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={orderData.farmer_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={orderData.status}
            onChange={handleChange}
          >
            <option value="confirmed">Confirmed</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea
            name="comments"
            value={orderData.comments}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Order Status</button>
      </form>
    </div>
  );
}

export default ConfirmRejectOrder;