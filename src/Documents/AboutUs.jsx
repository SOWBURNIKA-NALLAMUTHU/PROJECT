import React from "react";

const AboutUs = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/cement-wall-texture-background_53876-91519.jpg?size=626&ext=jpg&ga=GA1.1.1515574406.1700475824&semt=ais')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "white" }}>ABOUT US</h1>
      <p>
        <h3>
          * Our motive is to infuse joy into every occasion through personalized
          gifts that capture the essence of the recipient.
          <br /> * We believe in transforming gift-giving into a meaningful
          experience, where each item is a heartfelt expression of care and
          thoughtfulness.
          <br />
          * Join us on a journey where every present becomes a cherished memory,
          and every celebration is adorned with the touch of personalization.
          <br />* Welcome to a world where the joy of giving knows no bounds.
        </h3>
      </p>
    </div>
  );
};

export default AboutUs;
