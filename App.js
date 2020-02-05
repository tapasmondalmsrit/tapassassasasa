import React from "react";
import {BrowserRouter,Route,Link} from 'react-router-dom'

// page Component
import  Navbar from './component/Navbar/NavbarComponent'
import Home from "./Pages/Home";
import TrnsporterForm from "./Pages/TrnsporterForm";
import FormPage from "./Pages/FormPage";
import ReduxSetup from "./Pages/ReduxSetup";

// redux store 
import { Provider } from "react-redux";
import store from "./store/store";


function App() {

  return (
    <Provider store={store}>
 
     <BrowserRouter>

      <Navbar/>
     <Route path="/" exact component={Home}/>
     <Route path="/demo" component={TrnsporterForm}/>
     <Route path="/form" component={FormPage}/>
     <Route path="/redux" component={ReduxSetup}/>
     
     </BrowserRouter>
     </Provider>
  );
}



export default App;
