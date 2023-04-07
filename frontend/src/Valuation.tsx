import React, { useEffect, useState } from "react";
import "./Valuation.css";
import { HiTrendingUp, HiDotsVertical } from "react-icons/hi";
import { BiCoinStack } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Post } from "./models/post";
import { useLocation } from "react-router-dom";

export default function Valuation() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  
  const location = useLocation();
    const [editPost,seteditPost] = useState<Post>(location.state.posts);
  console.log(editPost)

  interface postInput {
    name?: string;
    username?: string;
    grosscoins?: number;
    netcoins?: number;
    leadcoins?: number;
    highestLeader?: string;
  }

  async function loadPosts() {
    try {
      const response = await fetch("/api/posts", {
        method: "GET",
      });
      const posts = await response.json();
      console.log("jii");
      setPosts(posts);
      console.log("hey");
      console.log(location.state.posts);
    } catch (error) {
      console.log(error);
    }
  }
async function handleLead(){
  const newObj = {...editPost,netcoins:editPost.netcoins+editPost.leadcoins,grosscoins:editPost.grosscoins+editPost.netcoins+editPost.leadcoins,leadcoins:editPost.leadcoins+100,highestLeader:location.state.currentUsername}
 console.log(newObj)
  seteditPost(newObj)
 let response = await handleLeadButton(newObj._id,newObj);
 console.log(response)    

} 
  async function handleLeadButton(postId: string, post: postInput) {
    try {
      const response = await fetch('/api/posts/'+postId, {
        method: "PATCH", 
        headers :{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(post),
      });
      return  response.json();
   
    } catch (error) {console.log(error)}
  }

  useEffect(() => {
    loadPosts();
    console.log(location.state.posts.username);
  }, []);

  return (
    <div className="valuation-container">
      <div className="post-container ">
        <div className="post-header">
          <img className="profile-pic" src="./profile_pic.jpg" alt="somePost" />
          <div className="handle">{editPost.username}</div>
          <div className="timeOfPost"> 6 June</div>
          <div className="numberOfCoins">
            <BiCoinStack color="gold" />
            <strong>{editPost.grosscoins}</strong>
          </div>
          <div className="grossCoins">Gross Coins</div>
          <div className="growthArrow">
            <HiTrendingUp color="green" />
          </div>
          <div className="options">
            <HiDotsVertical />
          </div>
        </div>

        <div className="post-image">
          <img src="./post_img.png" alt="profile" />
        </div>
        <div className="likes-row">
          <div className="thunder">
            <AiOutlineThunderbolt />
          </div>
          <div className="comments">
            <FaRegComment />
          </div>
          <div className="share">
            <RiShareForwardLine />
          </div>
          <div>
            <button
              className="lead-button"
              onClick={() => {
                handleLead()
              }}
            >
              Lead + {editPost.leadcoins}
              <span className="UCoin">U</span>
            </button>
          </div>
        </div>

        <div className="interested-row">50 Interested</div>
        <div className="timer-row">
          <img
            className="another-profile-pic"
            src="./profile_pic.jpg"
            alt="profile"
          ></img>
          <div className="netcoins">
            <div>
              <BiCoinStack color="gold" />
            </div>
            <div>{editPost.netcoins}</div>
            <div>
              <HiTrendingUp color="green" />
            </div>
          </div>
          <div className="bottom-username">
            <strong>{editPost.highestLeader}</strong> in Lead
          </div>
          <div className="timer">
            <span className="timer-comp">144</span> :
            <span className="timer-comp">00</span> :
            <span className="timer-comp">00</span>
          </div>
        </div>
        <div className="comment-row">
          <strong>@alfredo </strong>
          If everything seems under control, you're going fast enough. Be Fast,
          Be Curious..!
        </div>
      </div>
    </div>
  );
}
