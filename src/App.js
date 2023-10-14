import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log("Fetched data:", actualData);
        if (Array.isArray(actualData.users)) {
          setData(actualData.users);
        } else {
          console.error("Fetched data's users is not an array:", actualData.users);
        }
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Current data:", data);

  return (
    <div className="App">
      <h2>User Table</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Eye Color</th>
            <th>Website</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.eyeColor}</td>
                <td>{user.domain}</td>
                <td><img src={user.image} alt={`User ${index}`} style={{ width: '50px', height: '50px' }} /></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
