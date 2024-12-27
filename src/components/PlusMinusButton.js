import { Button, Input, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { fulfillmentData, itemData } from "./MockData";
const { Text } = Typography;

const PlusMinusButton = (props) => {
  const [quantity, setQuantity] = useState(0);
  const totalPrice = (quantity * itemData.retailPrice).toFixed(2);

  const handleIncreaseQantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQantity = () => {
    setQuantity(quantity - 1);
  };
  const handleInputValue = (e) => {
    setQuantity(Number(e.target.value));
  };

  useEffect(() => {
    props.handleQuantity(quantity);
  }, [quantity]);

  return (
    <>
      <Space
        style={{
          size: 145,
        }}
      >
        <Text>{totalPrice}</Text>
        <Space>
          <Button type="primary" shape="circle" onClick={handleDecreaseQantity}>
            &minus;
          </Button>
          <Input
            style={{
              width: 45,
            }}
            value={quantity}
            onChange={handleInputValue}
          />
          <Button type="primary" shape="circle" onClick={handleIncreaseQantity}>
            +
          </Button>
        </Space>
      </Space>
    </>
  );
};

export default PlusMinusButton;
