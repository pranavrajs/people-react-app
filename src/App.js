import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Navbar from 'components/generic/Navbar';
import EmployeeListing from 'views/Employees/Listing/container';
import NewEmployeeView from 'views/Employees/New/container';
import EditEmployeeContainer from 'views/Employees/Edit/container';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div>
          <Navbar user={{ name: 'Julie Howard', role: 'Admin' }} />
          <div className="container mx-auto page--content">
            <Switch>
              <Route exact path="/employees" component={EmployeeListing} />
              <Route exact path="/employees/new" component={NewEmployeeView} />
              <Route exact path="/employees/:employeeId/update" component={EditEmployeeContainer} />
              <Redirect to="/employees" />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
