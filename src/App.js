import './App.css';
import SidebarLayout from './components/SidebarLayout';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home.js";
import Error from "./Error.js";
import { FaWindowClose } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';

function App() {
  var icon={
    fontSize:"24px",
    position:"absolute",
    left:"20px",
    top:"20px",
    cursor:"pointer",
  }
  var [layout,setLayout]=useState(false);
  
  return (
    <div className="App">
      <TiThMenu style={icon} onClick={e=>setLayout(layout==true?false:true)}/>
      <SidebarLayout showLayout={layout} icon={<FaWindowClose style={icon} onClick={e=>setLayout(layout==true?false:true)}/>}></SidebarLayout>
      <Routes>
        <Route path="react-app-demo">
          <Route index element={<Home></Home>}/>
          <Route path="*" element={<Error></Error>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
