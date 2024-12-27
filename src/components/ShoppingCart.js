import React, { useState } from "react";
import { Button, Space, Typography } from "antd";
import PlusMinusButton from "./PlusMinusButton";
import DeliveryMethod from "./DeliveryMethod";
import { itemData } from "./MockData";
const { Text } = Typography;
const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [delivery, setDelivery] = useState("Pick Up");
  const totalPrice = (quantity * itemData.retailPrice).toFixed(2);

  const handleQuantity = (value) => {
    setQuantity(value);
  };

  const handleDeliveryMethod = (value) => {
    setDelivery(value);
  };

  const handleSubmit = () => {
    console.log(
      "Quantity:",
      quantity,
      "Delivery Method:",
      delivery,
      "and Total price:",
      totalPrice
    );
  };
  return (
    <>
      <Space direction="vertical">
        <PlusMinusButton handleQuantity={handleQuantity} />
        <DeliveryMethod handleDeliveryMethod={handleDeliveryMethod} />

        <Button type="primary" onClick={handleSubmit}>
          UPDATE CART
        </Button>
      </Space>
    </>
  );
};
export default ShoppingCart;
