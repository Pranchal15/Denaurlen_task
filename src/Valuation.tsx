import React from "react";
import "./Valuation.css";





export default function Valuation() {
  return (
    <div className="valuation-container">
      <div className="post-container ">
      <div className="post-header">
        <img className="profile-pic" src="./profile_pic.jpg" />
        <div className="handle">alfredo</div>
        <div className="timeOfPost"> 6 June</div>
        <div className="numberOfCoins">2011F</div>
        <div className="grossCoins">Grooss</div>
        <div className="growthArrow">arrow</div>
        <div className="options">hey</div>

      </div>
      <div className="post-image"><img  src='./post_img.png'/></div>
      <div className="likes-row">
        <div className="thunder">th</div>
        <div className="comments">com</div>
        <div className="share">sh</div>
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
