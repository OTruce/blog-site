import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  /* 
    LOGIC: 
    1. The 'image' prop has a default value if no URL is provided.
    2. The alt attribute is hardcoded to "blog logo" for accessibility testing.
    3. This component is connected to App.jsx.
  */
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;