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
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/orders/update', {  // Ensure URL is correctly specified
      method: 'PATCH',
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
  }

  return (
    <div className="confirm-reject-container">
      <h2 className="confirm-reject-title">Confirm or Reject Order</h2>
      <form className="confirm-reject-form" onSubmit={handleSubmit}>
        <label className="confirm-reject-label">
          Order ID:
          <input
            type="text"
            name="order_id"
            value={orderData.order_id}
            onChange={handleChange}
            className="confirm-reject-input"
          />
        </label>
        <label className="confirm-reject-label">
          Farmer ID:
          <input
            type="text"
            name="farmer_id"
            value={orderData.farmer_id}
            onChange={handleChange}
            className="confirm-reject-input"
          />
        </label>
        <label className="confirm-reject-label">
          Status:
          <select
            name="status"
            value={orderData.status}
            onChange={handleChange}
            className="confirm-reject-select"
          >
            <option value="confirmed">Confirmed</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>
        <label className="confirm-reject-label">
          Comments:
          <textarea
            name="comments"
            value={orderData.comments}
            onChange={handleChange}
            className="confirm-reject-textarea"
          />
        </label>
        <button type="submit" className="confirm-reject-button">Update Order Status</button>
      </form>
    </div>
  );
}

export default ConfirmRejectOrder;