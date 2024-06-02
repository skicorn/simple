import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        setUsers(res.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, []);
  const list = () => {
    const tb = document.querySelector('.data');
    const tbody = tb.querySelector('tbody');
    tbody.innerHTML ="";
    users.forEach(element => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.email}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="Content">
          <table className="data">
            <thead>
              <th>User</th>
              <th>Email</th>
            </thead>
            <tbody className=".tbd">
            </tbody>
          </table>
          <button className="Button" onClick={list}>Get</button>
        </div>
      </header>
    </div>
  );
}

export default App;
