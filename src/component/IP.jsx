import React, { useState, useEffect } from "react";
import.meta.env.VITE_SOME_KEY



function IP() {
  const [ipInfo, setIpInfo] = useState([]);
  const apiKey = "https://geo.ipify.org/api/v1?apiKey=at_yPskBEKrLkPuHgx2hCX77aF5VBs9Z";
  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_yPskBEKrLkPuHgx2hCX77aF5VBs9Z`)
      .then((response) => response.json())
      
      .then((data) => {
        setIpInfo(data);
      });
  }, []);
  console.log(ipInfo);
  
  return (
    <div className="App">
      <h1>My IP</h1>
      <p>My IP Address: {ipInfo.ip}</p>
      <p>My Country: {ipInfo.location?.country}</p>
      <p>My Region: {ipInfo.location?.region}</p>
      <p>My City: {ipInfo.location?.city}</p>
      <p>My Timezone: {ipInfo.location?.timezone}</p>
      <p>My service: {ipInfo.isp}</p>
      
      
      
    </div>
  );
}
export default IP;