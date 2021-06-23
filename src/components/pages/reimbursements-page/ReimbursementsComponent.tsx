import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { request } from 'http';
import ReactDOM from 'react-dom';
import trmsClient from '../../../remote/trms-backend/trms.client';
import Reimbursement from '../../../models/reimbursement'
import { getReimbursements } from '../../../remote/trms-backend/trms.api';

type Props = {
  requests: Reimbursement[];
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const ReimbursementComponent: React.FC<Props> = ({requests, setSelected}) => {
  return (
    <>
      {requests.map(element => (
        <div id={element.id} key={element.id}  onClick={(event) => setSelected(event.currentTarget.id)}>
          username: {`${element.username} `}
          date: {`${element.date} `}
          location: {`${element.location} `}
          description: {`${element.description} `} 
          cost: {`${element.cost} `}
          amount: {`${element.amount} `}
          category: {`${element.category} `}
          rStat: {`${element.rStat} `}
        </div>
      ))}   
     </>
  )
}

export default ReimbursementComponent;