import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "WHAT DO YOU SAY TO NOT GIVING UP?",
    bottomText: "NOT TODAY!",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleChange(event) {
    console.log(meme);

    const { name, value, type, checked } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function getRandomImage() {
    const memesArray = allMemeImages.data.memes;
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let randomImageUrl = memesArray[randomNumber].url;

    setMeme(memesArray[randomNumber].url);
    console.log(memesArray, "url");
  }

  return (
    <main className="">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getRandomImage}>
          Get a new meme image
        </button>
        <img className="meme--image" src={meme.randomImage} alt="loadedImage" />
      </div>
    </main>
  );
}
