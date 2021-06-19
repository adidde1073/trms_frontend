import React from 'react';
import './HomePage.css';
import { useAppSelector } from '../../../hooks';
import { selectUser, UserState } from '../../../slices/user.slice';

type Props = {
}

const HomePage: React.FC<Props> = (props) => {
  const user = useAppSelector<UserState>(selectUser);

  return (
    <>
      <div className="banner">
        <div>
          <h1 className='whiteText'>Welcome to Our Reimbursement Portal</h1><br/>
        </div>
        <br/>
        <h2 className='whiteText'>If you no longer go for the gap that exists,</h2>
        <h2 className='whiteText'>you're no longer a racing driver.</h2>
        <h3 className='whiteText'>- Ayrton Senna</h3>
        <br/>
        { user && <p className='whiteText'>Greetings {user.username}</p>}
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
           
          </div>
          <div className="col-sm-4">
            
          </div>       
          <div className="col-sm-4">
            
          </div>
        </div>
      </div>
      <div className="footer">
      </div>
    </>
  );
};

export default HomePage;
