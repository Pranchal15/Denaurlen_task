import React, { useEffect, useState } from "react";
import "./Signin.css";


export default function Signin() {
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");

  interface UserInput{
    username:string,
    name:string
  }

  
async function createUser(user:UserInput)
{
  const response = await fetch("/api/users",
  {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(user),
  });
  return response.json();

}

useEffect(() => {
  createUser({"name":"hey","username":"hi"})


}, [])

  return (
    <div className="container">
      <p className="title">Enter your details</p>
      <form className="form">
        <input className="inputbox" type="text" placeholder="Enter your name" />

        <input
          className="inputbox"
          type="text"
          placeholder="Enter your username"
        />

        <input type="submit" className="submit-button" value="Submit"  />
      </form>
    </div>
  );
}
