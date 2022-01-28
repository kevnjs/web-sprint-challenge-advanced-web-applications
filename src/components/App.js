import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import PrivateRoute from './PrivateRoute';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import View from './View';
import Logout from './Logout';


const App = () => {
  const privateRouteToView = <PrivateRoute exact path="/view" component={View} />
  const privateRouteToLogout = <PrivateRoute exact path="/logout" component={Logout}/>
  const routeToLogin1 = <Route exact path="/">  <Login/>  </Route>
  const routeToLogin2 = <Route exact path="/login">  <Login/>  </Route>

  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>
      <RouteContainer>

        <Switch>
          {privateRouteToView}
          {privateRouteToLogout}
          {routeToLogin1}
          {routeToLogin2}
        </Switch>  

      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
