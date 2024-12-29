import React, { useState } from "react";
import { Button } from "antd";
import PlusMinusButton from "./PlusMinusButton";
import FulfilmentOption from "./FulfilmentOption";
import { itemData } from "./MockData";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedFulfilmentOption, setSelectedFulfilmentOption] = useState(101);

  const totalPrice = (quantity * itemData.retailPrice).toFixed(2);

  const handleQuantity = (value) => {
    setQuantity(value);
  };

  const handleFulfilmentOption = (value) => {
    setSelectedFulfilmentOption(value);
  };

  const handleUpdateCart = () => {
    console.log(
      "Quantity:",
      `${quantity},`,
      "selected Fulfilment Option:",
      `${selectedFulfilmentOption},`,
      "and Total price:",
      `$${totalPrice}.`
    );
  };

  return (
    <div className="Shopping-cart">
      <PlusMinusButton
        handleQuantity={handleQuantity}
        selectedFulfilmentOption={selectedFulfilmentOption}
      />
      <FulfilmentOption
        quantity={quantity}
        handleFulfilmentOption={handleFulfilmentOption}
      />

      <Button
        type="primary"
        style={{ marginTop: "15px", fontWeight: "bold" }}
        color="default"
        variant="solid"
        onClick={handleUpdateCart}
      >
        {quantity > 0 ? "UPDATE CART" : "ADD TO CART"}
      </Button>
    </div>
  );
};
export default ShoppingCart;
