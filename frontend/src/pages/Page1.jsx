import React from "react";
import "./Page1.css";
import { useState } from "react";

function Page1() {
  const [inputFile, setInputFile] = useState(null);
  const [outputFile, setOutputFile] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", inputFile);

    console.log([...formData.entries()]);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/getPhoto`, {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob(); // <-- instead of .json()
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    setOutputFile(imageUrl);
  }

  if (!outputFile) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(event) => {
              setInputFile(event.target.files[0]);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            setInputFile(event.target.files[0]);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>

      <img src={outputFile} style={{ height: "80vh" }} alt="Output Image" />
    </>
  );
}

export default Page1;
