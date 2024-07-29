import React from "react";
import background from "../Assist/Background.jpg";
import "../Style/Mainpage.css";

function Mainpage() {
  ////style={{ backgroundImage: `url(${background})` }}
  return (
    <div className="mainpage">
      <div className="overlay">
        <h2 className="mainpage-title">Welcome to Job Portal</h2>
        <div className="blocks">
          <div className="block">
            <h3>Results</h3>
            <ul>
              <li>
                <a href="#result1">Result 1</a>
              </li>
              <li>
                <a href="#result2">Result 2</a>
              </li>
              <li>
                <a href="#result3">Result 3</a>
              </li>
              <li>
                <a href="#result4">Result 4</a>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3>Admit Cards</h3>
            <ul>
              <li>
                <a href="#admit-card1">Admit Card 1</a>
              </li>
              <li>
                <a href="#admit-card2">Admit Card 2</a>
              </li>
              <li>
                <a href="#admit-card3">Admit Card 3</a>
              </li>
              <li>
                <a href="#admit-card4">Admit Card 4</a>
              </li>
            </ul>
          </div>
          <div className="block">
            <h3>Latest Jobs</h3>
            <ul>
              <li>
                <a href="#job1">Job 1</a>
              </li>
              <li>
                <a href="#job2">Job 2</a>
              </li>
              <li>
                <a href="#job3">Job 3</a>
              </li>
              <li>
                <a href="#job4">Job 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
