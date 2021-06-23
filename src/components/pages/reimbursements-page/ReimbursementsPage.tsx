import React, { useEffect, useState } from 'react';
import Reimbursement from '../../../models/reimbursement'
import { getReimbursements } from '../../../remote/trms-backend/trms.api';
import ReimbursementsComponent from './ReimbursementsComponent';


const ReimbursementsPage: React.FC<unknown> = (Props) => {
    const [selected, setSelected] = useState<string>();
    const [requests, setRequests] = useState<Reimbursement[]>();
    // const employee = useAppSelector<EmployeeState>(selectEmployee);
    useEffect(() => {
        (async () => { 
          const result = await getReimbursements();
          // add error handling
          const array: Reimbursement[] = []
          setRequests(result); 
          console.log(result);
          console.log('Requests, ', requests);
        })();
    },[requests]);
    return (
      <>
        {requests 
        ? <ReimbursementsComponent requests={requests} setSelected={setSelected}/>
        :<></>
        }
      </>
    )
  };

  export default ReimbursementsPage;