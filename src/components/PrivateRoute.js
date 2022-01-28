import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component:Component, ...rest}) {
  if (localStorage.getItem('token')) {
      return <Route render={()=> <Component {...rest}/>} />
  } else {
      alert("Please Login to continue")
      return <Redirect to="/"/>
  }
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute