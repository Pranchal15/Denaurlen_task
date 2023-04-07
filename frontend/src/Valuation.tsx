import React, { useEffect, useState } from "react";
import "./Valuation.css";
import { HiTrendingUp, HiDotsVertical } from "react-icons/hi";
import { BiCoinStack } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { Post } from "./models/post";

export default function Valuation() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("/api/posts", {
          method: "GET",
        });
        console.log("I am here");
        const posts = await response.json();
        console.log("line 23");
        console.log(response);
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    }
    loadPosts();

    console.log(posts);
  }, [posts]);

  return (
    <div className="valuation-container">
      <div className="post-container ">
        <div className="post-header">
          <img className="profile-pic" src="./profile_pic.jpg" alt="somePost" />
          <div className="handle">alfredo</div>
          <div className="timeOfPost"> 6 June</div>

          <div className="numberOfCoins">
            <BiCoinStack color="gold" />
            <strong>2100</strong>
          </div>
          <div className="grossCoins">Grooss</div>
          {/* <div className="growthArrow">arrow</div> */}
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
            <button className="lead-button">
              Lead + 100
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
            <div>1100</div>
            <div>
              <HiTrendingUp color="green" />
            </div>
          </div>
          <div className="bottom-username">
            <strong>terry_dias</strong> in Lead
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
