import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getRandomImage() {
    let randomNumber = Math.floor(Math.random() * allMemeImages.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemeImages[randomNumber].url,
    }));
    console.log(allMemeImages[randomNumber].url, "url");
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
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
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="loadedImage" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
