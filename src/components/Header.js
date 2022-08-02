import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        src="../public/logo192.png"
        alt="logo for header"
        className="header--image"
      />
      <h2 className="header--title"> MemeGenerator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </div>
  );
}
