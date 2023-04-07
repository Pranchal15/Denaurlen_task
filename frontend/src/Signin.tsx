import React, { useEffect, useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { Post } from "./models/post";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();


  const [posts, setPosts] = useState();
   
  async function loadPosts() {
  try {
    const response = await fetch("/api/posts", {
      method: "GET",
    });
    const fin = await response.json();
    const post = fin[0]
    setPosts(post);


  } catch (error) {
    console.log(error);
  }
}


  interface UserInput {
    username: string;
    name: string;
  }

  async function createUser(user: UserInput) {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }

  async function handleSubmit() {
    console.log(posts)
    navigate("/valuation",{state:{posts:posts,currentUsername:username}});
    let response = await createUser({ name: name, username: username });


  }
  useEffect(() => {loadPosts()}, []);

  return (
    <div className="container">
      <p className="title">Enter your details</p>
      <form className="form">
        <input
          className="inputbox"
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          className="inputbox"
          type="text"
          placeholder="Enter your username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="submit"
          className="submit-button"
          value="Submit"
          onClick={() => handleSubmit()}
        />
      </form>
    </div>
  );
}
