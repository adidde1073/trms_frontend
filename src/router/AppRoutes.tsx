 import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/home-page/HomePage';
import ReimbursementsPage from '../components/pages/reimbursements-page/ReimbursementsPage';
import AddReimbursementPage from '../components/pages/add-reimbursement-page/AddReimbursementPage';
import LoginPage from '../components/pages/login-page/LoginPage';

const AppRoutes: React.FC<unknown> = (props) => {

  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/reimbursements'>
        <ReimbursementsPage/>
      </Route>
      <Route exact path='/add-reimbursement'>
        <AddReimbursementPage/>
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
};

export default AppRoutes;