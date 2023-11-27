import React from "react";

const Services = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/hand-painted-watercolor-nature-background_23-2148941603.jpg?w=996&t=st=1701072227~exp=1701072827~hmac=4b8a95d934abffb0637fd751e4af2594c723e259cabcbb1e770dafc92b6c3f92')", // replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={containerStyle}>
      <h1 style={{ color: "olivedrab" }}>SERVICES</h1>
      <b>User-Friendly Interface:</b> Ensure easy navigation and a secure
      checkout process. <br />
      <br />
      <b>Options:</b> Offer engraving, color choices, and interactive
      customization. <br />
      <br />
      <b>Gift Finder Tool: </b>Simplify decision-making with a feature based on
      recipient, occasion, and interests. <br />
      <br />
      <b>Responsive Design:</b> Optimize the website for seamless use on various
      devices.
      <br />
      <br />
      <b>Unique Product Descriptions:</b> Highlight sentimental value and
      customization options.
    </div>
  );
};

export default Services;
