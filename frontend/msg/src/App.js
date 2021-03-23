import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import NewMessage from "./Components/NewMessage"
import ShowMessage from "./Components/ShowMessage"
import DeleteMessage from "./Components/DeleteMessage"
import 'bootstrap/dist/css/bootstrap.min.css';
 


function App(props) {
  return ( 
    <Router>
      <Switch>
        <Route exact path = '/' render={(props)=>{
          return(
            <NewMessage/>
          )
        }}/>
           <Route exact path = '/delete' render={(props)=>{
          return(
            <DeleteMessage/>
          )
        }}/>
          <Route path = '/message' render={(props)=>{
          return(
            <ShowMessage/>
          )
        }}/> 
      </Switch>
    </Router>

  );
}

export default App;
