import React from "react";
import "../styles/AddText.css";
const AddText = () => {
  return (
    <>
      <div class="container">
        <div class="input-container">
          <input type="text" id="customText" placeholder="Enter custom text" />
          <button id="updateTextButton">Update Text</button>
        </div>
        <div class="image-container">
          <img id="imageDisplay" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default AddText;
