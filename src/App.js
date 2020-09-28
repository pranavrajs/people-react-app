import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";

import EmployeeListing from './views/Employees/Listing'
import NewEmployeeView from './views/Employees/New'

function App() {
  return (
    <Router>
      <div>
        <Navbar user={{ name: 'Julie Howard', role: 'Admin' }}/>
        <div className="container mx-auto">
          <Switch>
            <Route exact path="/employees" component={EmployeeListing} />
            <Route exact path="/employees/new" component={NewEmployeeView} />
            <Route exact path="/employees/:employeeId/update">
              <EmployeeListing />
            </Route>
            <Redirect to="/employees" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
