import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  function getRandomImage() {
    const memesArray = memesData.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber, "randdom number");

    let randomImageUrl = memesData.data.memes[randomNumber].url;
    console.log(randomImageUrl, "url");
  }

  return (
    <main className="">
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
}
