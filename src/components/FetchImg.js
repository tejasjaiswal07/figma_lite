import React from "react";
import { useState, useEffect } from "react";
import "../styles/FetchImg.css";

const FetchImg = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchImage();
  }, []);

  async function fetchImage() {
    const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
    const apiUrl =
      "https://api.unsplash.com/photos/random?client_id=" + accessKey;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setImageUrl(data.urls.regular);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }

  return (
    <div className="image-container">
      {imageUrl ? (
        <img src={imageUrl} alt="" className="image" />
      ) : (
        <div className="loading-placeholder">Loading Image...</div>
      )}
    </div>
  );
};

export default FetchImg;
