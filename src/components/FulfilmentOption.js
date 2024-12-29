import React, { useEffect, useState } from "react";
import { Radio, Space, Typography } from "antd";
import { fulfillmentData, storeData } from "./MockData";
import "../styles/FulfilmentOption.css";

const { Text } = Typography;

const FulfilmentOption = ({ quantity, handleFulfilmentOption }) => {
  const [selectedFulfilmentOption, setSelectedFulfilmentOption] = useState(101);

  const onChange = (e) => {
    setSelectedFulfilmentOption(e.target.value);
  };

  useEffect(() => {
    handleFulfilmentOption(selectedFulfilmentOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFulfilmentOption]);

  const checkInStock = () => {
    if (quantity <= fulfillmentData.inStockPickUpAvailableQty) {
      return <Text style={{ color: "green" }}>&#10003; In Stock</Text>;
    } else {
      return <Text style={{ color: "grey" }}>Out of Stock</Text>;
    }
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={selectedFulfilmentOption}
      className="antd-radio"
    >
      <div className="Fulfilment-option">
        <Space
          className="Fulfilment-option"
          direction="vertical"
          style={{
            padding: "20px",
          }}
        >
          <Radio value={101}>Free In-Store or Curbside Pick Up</Radio>
          <Text style={{ paddingLeft: "25px" }}>
            {checkInStock()} {"| "}
            <span style={{ textDecoration: "underline" }}>
              {storeData.storeAddress.toUpperCase()}
            </span>
          </Text>
        </Space>

        <Space
          className="Fulfilment-option"
          direction="vertical"
          style={{ padding: "20px" }}
        >
          <Radio value={102}>Home Delivery</Radio>
          <Text style={{ paddingLeft: "40px" }}>Standard Delivery </Text>
          <Text style={{ paddingLeft: "40px" }}>
            Est. Delivery{" "}
            <span style={{ color: "green" }}>
              {fulfillmentData.deliveryData.substring(15, 26)}
            </span>
          </Text>
        </Space>
      </div>
    </Radio.Group>
  );
};
export default FulfilmentOption;
