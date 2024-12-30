import { Button, Input, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { fulfillmentData, itemData } from "./MockData";

const { Text } = Typography;

const PlusMinusButton = ({ selectedFulfilmentOption, handleQuantity }) => {
  const [quantity, setQuantity] = useState(1);

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
    handleQuantity(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <Space style={{ width: "100%", justifyContent: "space-between" }}>
      <Text style={{ fontSize: "36px", fontWeight: "bold" }}>
        ${totalPrice}
      </Text>
      <Space direction="vertical" align="center">
        <Space>
          <Button
            type="primary"
            shape="circle"
            color="grey"
            variant="outlined"
            onClick={handleDecreaseQantity}
            disabled={quantity <= 1}
          >
            &minus;
          </Button>
          <Input
            style={{
              width: "50px",
              fontWeight: "bold",
              textAlign: "center",
              borderBottom: "3px solid grey",
            }}
            value={quantity}
            onChange={handleInputValue}
          />

          <Button
            type="primary"
            shape="circle"
            color="grey"
            variant="outlined"
            onClick={handleIncreaseQantity}
            disabled={
              selectedFulfilmentOption === 101
                ? quantity >= fulfillmentData.inStockPickUpAvailableQty
                : quantity >= fulfillmentData.homeDeliveryAvailableQty
            }
          >
            +
          </Button>
        </Space>
        <Text>{`Each $${itemData.retailPrice}`}</Text>
      </Space>
    </Space>
  );
};

export default PlusMinusButton;
