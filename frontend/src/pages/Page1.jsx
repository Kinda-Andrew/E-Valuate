import React from "react";

import "./Page1.css";

import { useState } from "react";
import { Link } from "react-router-dom";

function Page1() {
  const [inputFile, setInputFile] = useState(null);
  const [outputFile, setOutputFile] = useState(null);
  const [descriptions, setDescriptions] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", inputFile);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/getPhoto`, {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob(); // <-- instead of .json()
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    setOutputFile(imageUrl);

    const descriptionHeader = res.headers.get("Descriptions");

    const parsed = JSON.parse(descriptionHeader);

    console.log(parsed);

    const reasons = [
      ...(parsed.ev_charging || []).map((x) => x.reasoning),
      ...(parsed.trees || []).map((x) => x.reasoning),
      ...(parsed.bike_racks || []).map((x) => x.reasoning),
    ];
    setDescriptions(reasons);
  }

  if (inputFile) {
    if (!outputFile) {
      return (
        <>
          <div className="button2">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home!
            </Link>
          </div>

          <div className="grid">
            <div className="item1">
              <form onSubmit={handleSubmit}>
                <input
                  type="file"
                  onChange={(event) => {
                    setInputFile(event.target.files[0]);
                  }}
                ></input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="item2">
              <img src="./arrow.png" width="80px"></img>
            </div>
            <div className="item3">
              <img src={URL.createObjectURL(inputFile)} width="80%"></img>
            </div>
          </div>

          {/* This is the bottom part */}
          <div className="bottompart">
            <div className="transformed">
              {/* This is a sample image of a transformed photo */}
            </div>

            {/* This part contains information about the photo */}
            <div className="info">
              Please wait while the AI analyzes your image.
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="button2">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home!
          </Link>
        </div>

        <div className="header">
          {" "}
          <h1> Eco-vision</h1>{" "}
        </div>

        <div className="grid">
          <div className="item1">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={(event) => {
                  setInputFile(event.target.files[0]);
                }}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="item2">
            <img src="./arrow.png" width="80px"></img>
          </div>
          <div className="item3">
            <img src={URL.createObjectURL(inputFile)} width="80%"></img>
          </div>
        </div>

        {/* This is the bottom part */}
        <div className="bottompart">
          <div className="transformed">
            {/* This is a sample image of a transformed photo */}
            <img src={outputFile} width="80%"></img>
          </div>

          {/* This part contains information about the photo */}
          <div className="info">
            <ul>
              {descriptions.map((desc, index) => (
                <li style={{ fontSize: "16px" }} key={index}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="button2">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home!
          </Link>
        </div>

        <div className="header">
          {" "}
          <h1> Eco-vision</h1>{" "}
        </div>

        <div className="grid">
          <div className="item1">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={(event) => {
                  setInputFile(event.target.files[0]);
                }}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="item2">
            <img src="./arrow.png" width="80px"></img>
          </div>
          <div className="item3"></div>
        </div>

        <div className="bitofword">
          The AI will generate a photo of the suggested upgrades in the area
          below:
        </div>
        {/* This is the bottom part */}
        <div className="bottompart">
          <div className="transformed">
            {/* This is a sample image of a transformed photo */}
          </div>

          {/* This part contains information about the photo */}
          <div className="info">
            Please wait while the AI analyzes your image.
          </div>
        </div>
      </>
    );
  }
}

export default Page1;
