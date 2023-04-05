import React from "react";
import "./Valuation.css";
import { HiTrendingUp,HiDotsVertical} from "react-icons/hi";
import {BiCoinStack} from "react-icons/bi"
import {FaRegComment} from "react-icons/fa"
import {AiOutlineThunderbolt} from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"




export default function Valuation() {
  return (
    <div className="valuation-container">
      <div className="post-container ">
      <div className="post-header">
        <img className="profile-pic" src="./profile_pic.jpg" />
        <div className="handle">alfredo</div>
        <div className="timeOfPost"> 6 June</div>
        
        <div className="numberOfCoins"><BiCoinStack/><strong>2100</strong></div>
        <div className="grossCoins">Grooss</div>
        {/* <div className="growthArrow">arrow</div> */}
      <div className="growthArrow"><HiTrendingUp/>
        </div>  
        <div className="options"><HiDotsVertical/></div>
      </div>
      <div className="post-image"><img  src='./post_img.png'/></div>
      <div className="likes-row">
        <div className="thunder"><AiOutlineThunderbolt/></div>
        <div className="comments"><FaRegComment/></div>
        <div className="share"><RiShareForwardLine/></div>
        <div ><button className="lead-button">Lead +100</button></div>
      </div>
      <div className="interested-row">50 Interested</div>
      <div className="timer-row">
        <img className="another-profile-pic" src ="./profile_pic.jpg"></img>
        <div className="netcoins">
          <div> i</div>
          <div>1000</div>
          <div>ar</div>

        </div>
        <div className="bottom-username">Terry</div>
        <div className="timer">TIMER</div>
      </div>
      <div className="comment-row"></div>
      </div>
    </div>
  );
}
