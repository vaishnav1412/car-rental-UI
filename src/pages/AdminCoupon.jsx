import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AdminCoupon = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);
  const [discountType, setDiscountType] = useState('percentage');

  const handleSubmit = (event) => {
    
    event.preventDefault();
    console.log('Form submitted:', {
      title,
      description,
      price,
      expirationDate,
      discountType,
    });
  }; 
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Coupon code</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Discount Type</label>
          <select
            className="form-control"
            value={discountType}
            onChange={(event) => setDiscountType(event.target.value)}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>

        <div className="form-group">
          <label>Discount Percentage or Amount</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Expiration Date</label>
          <DatePicker
            selected={expirationDate}
            onChange={(date) => setExpirationDate(date)}
            className="form-control"
          />
        </div>

        <button className="newbtn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AdminCoupon;
