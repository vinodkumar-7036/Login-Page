import React from "react"
import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import { addCounter } from "./Action";
import { useDispatch, useSelector } from "react-redux";

function App(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [fullName, setFullName] = useState("")
  const [middleName, setmiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mobileNo, setMobileNo] = useState("")
  // const [data, setData] = useState([])
  let userData = { email: email, password: password, firstName: firstName, fullName, middleName, lastName, mobileNo }

  const userList = useSelector((state => state))
  const dispatch = useDispatch()
  const displayData = () => {
    // setData([...data, userData])
    // console.log('::::::;data', data)
    dispatch(addCounter(userData))
  }
  console.log('::::::::::::>,userList', userList)
  return (
    <>

      <div className="App">
        <div className="container">
          <h3>Register</h3>
          <div><PersonIcon callName="field-icon" />< input type="text" placeholder='Email*' onChange={(e) => setEmail(e.target.value)} /></div>
          <div ><HttpsIcon />< input type="password" placeholder='Password*' onChange={(e) => setPassword(e.target.value)} /></div>

          <div><PersonIcon />< input type="text" placeholder='First name' onChange={(e) => setFirstName(e.target.value)} /></div>
          <div>< input type="text" placeholder='Full name' onChange={(e) => setFullName(e.target.value)} /></div>
          <div>< input type="text" placeholder='Middle name' onChange={(e) => setmiddleName(e.target.value)} /></div>
          <div>< input type="text" placeholder='Last name' onChange={(e) => setLastName(e.target.value)} /></div>
          <div>< input type="date" placeholder='Birth date' /></div>
          <div>< input type="tel" placeholder='Mobile phone' onChange={(e) => setMobileNo(e.target.value)} /></div>
          <div>
            <Button variant="contained" onClick={displayData}>Register</Button>
          </div>

        </div>
        <div>
          <h4>Return to login</h4>
          <table >
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>First name</th>
              <th>Full name</th>
              <th>Middle name</th>
              <th>Last name</th>
              <th>Mobile No</th>

            </tr>
            {userList.map((data) => <tr>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.firstName}</td>
              <td>{data.fullName}</td>
              <td>{data.middleName}</td>
              <td>{data.lastName}</td>
              <td>{data.mobileNo}</td>
            </tr>)}

          </table>
        </div>
      </div>
    </>
  );
}



export default App;
