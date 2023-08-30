import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./component/map"
import IP from "./component/IP";
import Flag from "./component/Flag";
import Time from "./component/Time";

import Locataion from "./component/Location";


function App() {
  
  return (
    <div className="App">
      
      <IP />
     
      <Time />
      
      <Locataion />
      
      
      
    </div>
  );
}
export default App;