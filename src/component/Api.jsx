import React, { useState, useEffect } from 'react';
import './App.css';

function Api() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const ipAddress = '8.8.8.8';
  const apiUrl = 'https://geo.ipify.org/api/v1?apiKey=${apiKey}';
  
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
     
      .then(data => {
        setIpInfo(data[0]);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>IP Information</h1>
      {ipInfo && (
        <p>
          IP: {ipInfo.ip}, Country: {ipInfo.location.country}
        </p>
      )}
    </div>
  );
}

export default Api;