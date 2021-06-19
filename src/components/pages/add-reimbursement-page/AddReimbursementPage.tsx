import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import './RegisterPage.css';
import pokeClient from '../../../remote/poke-api/poke.client';
import grubdashClient from '../../../remote/grubdash-backend/grubdash.client';

const AddReimbursementPage: React.FC<unknown> = (props)=> {
  // location, description, cost, eventType, amount, category,
  const [location, setLocation] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [cost, setCost] = useState<number>();
  const [category, setCategory] = useState<string>();

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCost(e.target.valueAsNumber);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send an Axios Request

    const response = await grubdashClient.post<boolean>('/api/v1/reimbursements', {
      location,
      description,
      cost,
      category,
    });

    console.log(response.data);
  }

  useEffect(() => {
    (async () => {
      const response = await pokeClient.get<unknown>('/pokemon/arcanine');
      console.log(response);
    })();
  }, []);

  console.log('location: ', location);
  console.log('description: ', description);
  console.log('cost: ', cost);
  console.log('category: ', category);

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
          <input type="description" className="form-control" id="descriptionInput"
            onChange={handleDescriptionChange} />
        </div>
          <div className="mb-3">
          <label htmlFor="costInput" className="form-label">Cost</label>
          <input type="cost" className="form-control" id="costInput"
            onChange={handleCostChange} />
        </div>
          <div className="mb-3">
          <label htmlFor="categoryInput" className="form-label">Category</label>
          <input type="category" className="form-control" id="categoryInput"
            onChange={handleCategoryChange} />
        </div>
          <input type="submit" className="btn btn-primary" value='Create new request' />
        </form>
    </div>
  );
};

export default AddReimbursementPage;