
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import AddTask from './components/Add/AddTask';
import EditTask from './components/Edit/EditTask';
import {Toaster} from 'react-hot-toast'
const Layout = () =>{
  return (
    <div className="main">
      <Toaster
      position="top-center"
      reverseOrder={false}
    />
       <Navbar/>
          <div className="container">
               <div className="menuContainer">
                  <Menu/>
               </div>
               <div className="mainContainer">
                  
                  <Outlet/>
               </div>
          </div>
{/*          
       <Footer/> */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/users",
        element : <Users/>
      },
      {
        path: "/add",
        element : <AddTask/>
      },
      {
        path: "/edit/:id",
        element : <EditTask/>
      }

    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
