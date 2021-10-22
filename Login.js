import React, { useState } from 'react';
import './login.css'

const Login =() =>{
    const[username,setUsername]= useState("")
    const[password,setPassword]=useState("")
    const submitForm=(e) =>{
        e.preventDefault();
        const actual_username="Atharv"
        const actual_password="atharv"
        console.log("infnc")
        if(actual_password===password && actual_username===username)
           {
               window.location.href="http://localhost:3000/Form";
               console.log("Inif")
           }
        else{
            alert("Incorrect username or password");
        }
    }
    return(
        <div className="container">
            <div className="logo"></div>

            <div className="right">
            <form className="form">
            <h1 className="login-heading">Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" autoComplete='off' value={username} 
                onChange={(e) =>setUsername(e.target.value)}/> <br></br><br></br>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete='off' value={password}
                onChange={(e) =>setPassword(e.target.value)}/><br></br><br></br>

                <button className="button" onClick={submitForm}>Login</button>
            </form>
            </div>
        </div>
    )
}

export default Login;

