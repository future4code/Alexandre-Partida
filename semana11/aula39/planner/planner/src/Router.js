import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import TaskList from './Components/TaskList';
import FormInput from './Components/FormInput'





function Router() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
          <FormInput/>
        </Route>
        <Route exact path="/ListaTarefa">
          <TaskList/>
        </Route>
    </Switch>
     
    </BrowserRouter>
  );
}

export default Router;
