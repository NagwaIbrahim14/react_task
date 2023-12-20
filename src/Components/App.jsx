
import { Component } from "react";
// import Home from "./Components/Home/Home";
import Parent from "./Parent/Parent";
import Gallary from "./Gallary/Gallary";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Notfound from "./Notfound/Notfound";
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";


let routers=createBrowserRouter([[
  {path:'home',element:<Layout/>,errorElement:<Notfound/>,children:[
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'contacts',element:<Contacts/>},
    {path:'gallary',element:<Gallary/>,children:
    [{path:'web',element:<Web/>},
    {path:'mobile',element:<Mobile/>}]},
    {path:'parent',element:<Parent/>}
  ]}
]]);

export default class App extends Component { 
  state={};


 

  //include all components
  render() {
    return <RouterProvider router={routers}/>
    // <>
    // {/* <h2>App Page</h2> */}
    // {/* <Parent/> */}
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6">
    //     <Gallery/>

    //     </div>
    //     <div className="col-md-6">
    // <Home/>
             
    //     </div>
    //   </div>
    // </div>
    // </>
   
  
  };
}