import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import trmsClient from '../../../remote/trms-backend/trms.client'

const ReimbursementsPage: React.FC<unknown> = (props) => {

  const [reimbursement, setReimbursement] = useState({res:[]});

  function rendReimbursements() {
    try {
      const listItems = (<ul> { JSON.stringify(reimbursement.res, null, 3) } </ul>);
      ReactDOM.render(
          listItems, document.getElementById('reimbursements'));
    } catch(error) {
      console.log('Could not list reimbursements');
    }
  }

  const handleGetReimbursement = async () => {
    const response = await trmsClient.get('/api/v1/reimbursements');
    console.log("the db response is: ", response.data);
    setReimbursement({res:response.data.res});
    console.log('writing,', reimbursement)
    rendReimbursements();
  }

  return (
    <>
    <div className="myForms">
        <h3>Reimbursements</h3>
        <br/>
        <button onClick ={ handleGetReimbursement } className="btn btn-primary">View</button>
        <br/><br/>
        <pre id='reimbursements'>
        </pre>
    </div>
    </>
  );
};

export default ReimbursementsPage;