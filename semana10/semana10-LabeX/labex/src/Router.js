import React from 'react';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';
import CreateTrip from './Components/CreateTrip';
import CreateTripPageADM from './Components/CreateTripPageADM';
import HomePage from './Components/HomePage';
import ListTripsAdm from './Components/ListTripsAdm';
import ListTripUsuarios from './Components/ListTripUsuarios';
import LoginPage from './Components/LoginPage';




function Router() {
   

  return (
    <div >
     <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/createTrip">
          <CreateTrip/>
        </Route>
        <Route exact path="createTripAdm/">
          <CreateTripPageADM/>
        </Route>
        <Route exact path="/listTripAdm">
          <ListTripsAdm/>
        </Route>
        <Route exact path="/listTripUser">
          <ListTripUsuarios/>
        </Route>
      </Switch>
     </BrowserRouter>
    </div>
  );
}

export default Router;
