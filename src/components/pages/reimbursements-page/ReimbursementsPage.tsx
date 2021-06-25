import React, { useEffect, useState } from 'react';
import Reimbursement from '../../../models/reimbursement'
import { getReimbursements, getEmployeeReimbursements } from '../../../remote/trms-backend/trms.api';
import ReimbursementsComponent from './ReimbursementsComponent';
import {  useAppSelector } from '../../../hooks';
import { selectUser, UserState } from '../../../slices/user.slice';

const ReimbursementsPage: React.FC<unknown> = (Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selected, setSelected] = useState<string>();
    const [requests, setRequests] = useState<Reimbursement[]>();
    const user = useAppSelector<UserState>(selectUser);
    useEffect(() => {
        if(user && user.role === 'Employee') {
          (async () => { 
            const result = await getEmployeeReimbursements();
            setRequests(result); 
            console.log(result);
            console.log('Requests, ', requests);
          })();
        } else {
          (async () => { 
            const result = await getReimbursements();
            setRequests(result); 
            console.log(result);
            console.log('Requests, ', requests);
          })();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
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