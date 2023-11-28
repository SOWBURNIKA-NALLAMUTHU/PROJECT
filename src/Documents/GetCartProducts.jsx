import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./GetProducts.css";
import { Link } from "react-router-dom";

export function GetCartProducts() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="wrapper">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Card1
              img={item.img}
              title={item.title}
              price={`${item.price}`}
              stock={item.stock}
              id={index}
            />
          ))
        ) : (
          <div>No items in cart</div>
        )}
      </div>
    </div>
  );
}

function Card1(props) {
  const handleRemoveItem = (index) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    window.location.reload();
  };

  return (
    <div className="card">
      <Card sx={{ maxWidth: 345, padding: 1 }}>
        <CardMedia className="image" image={props.img} sx={{ height: 250 }} />
        <CardContent>
          <p className="title">{props.title}</p>
          <p className="stock">Stocks Available: {props.stock}</p>
        </CardContent>
        <CardActions>
          <Button variant="outlined" className="button">
            MRP {props.price}
          </Button>
          <Button
            variant="outlined"
            className="cart"
            onClick={() => handleRemoveItem(props.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default GetCartProducts;
