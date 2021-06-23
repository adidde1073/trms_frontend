import React, { ChangeEvent, FormEvent, useState } from 'react';
import './AddReimbursement.css';
import trmsClient from '../../../remote/trms-backend/trms.client'

const AddReimbursementPage: React.FC<unknown> = (props)=> {
  // location, description, cost, eventType, amount, reimbursementCategory,
  const [location, setLocation] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [reimbursementCategory, setreimbursementCategory] = useState<string>();

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.valueAsNumber);
  };

  const handlereimbursementCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setreimbursementCategory(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send an Axios Request

    const response = await trmsClient.post<boolean>('/api/v1/reimbursements', {
      location,
      description,
      cost,
      reimbursementCategory,
    });

    console.log(response.data);
  }

  console.log('location: ', location);
  console.log('description: ', description);
  console.log('cost: ', cost);
  console.log('reimbursementCategory: ', reimbursementCategory);

  return (
    <div className='container' id='register-form'>
        <h2>So, you're a racing driver, huh?</h2>
        <form onSubmit={handleFormSubmit} >
          <div className="mb-3">
          <label htmlFor="locationInput" className="form-label">Location</label>
          <input type="text" className="form-control" id="locationInput"
            onChange={handleLocationChange} />
        </div>
          <div className="mb-3">
          <label htmlFor="descriptionInput" className="form-label">Description</label>
          <input type="text" className="form-control" id="descriptionInput"
            onChange={handleDescriptionChange} />
        </div>
          <div className="mb-3">
          <label htmlFor="costInput" className="form-label">Cost</label>
          <input type="number" className="form-control" id="costInput"
            onChange={handleCostChange} />
        </div>
          <div className="mb-3">
          <label htmlFor="reimbursementCategoryInput" className="form-label">Category</label>
          <input type="text" className="form-control" id="reimbursementCategoryInput"
            onChange={handlereimbursementCategoryChange} />
        </div>
          <input type="submit" className="btn btn-primary" value='Create new request' />
        </form>
    </div>
  );
};

export default AddReimbursementPage;