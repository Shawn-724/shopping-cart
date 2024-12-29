import React, { useState } from "react";
import { Button } from "antd";
import PlusMinusButton from "./PlusMinusButton";
import FulfilmentOption from "./FulfilmentOption";
import { fulfillmentData, itemData } from "./MockData";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(0);

  const [selectedFulfilmentOption, setSelectedFulfilmentOption] = useState(101);

  const handleQuantity = (value) => {
    setQuantity(value);
  };

  const handleFulfilmentOption = (value) => {
    setSelectedFulfilmentOption(value);
  };

  const handleAddToCart = () => {
    setQuantityInCart(quantity);
    console.log(
      "addToCart: \n sku:",
      `${itemData.sku},`,
      "quantity:",
      `${quantity},`,
      "selectedFulfilmentOption:",
      `${selectedFulfilmentOption}.`
    );
  };

  const handleUpdateCart = () => {
    console.log(
      "updateCart: \nsku:",
      `${itemData.sku},`,
      "quantity:",
      `${quantity},`,
      "selectedFulfilmentOption:",
      `${selectedFulfilmentOption}.`
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
        onClick={quantityInCart ? handleUpdateCart : handleAddToCart}
        disabled={
          (quantity === 0 && quantityInCart === 0) ||
          (selectedFulfilmentOption === 101
            ? quantity > fulfillmentData.inStockPickUpAvailableQty
            : quantity > fulfillmentData.homeDeliveryAvailableQty)
        }
      >
        {quantityInCart > 0 ? "UPDATE CART" : "ADD TO CART"}
      </Button>
    </div>
  );
};
export default ShoppingCart;
