import React, { useEffect, useState } from "react";
import { Radio, Space, Typography } from "antd";
import { fulfillmentData, storeData } from "./MockData";
import "../styles/FulfilmentOption.css";

const { Text } = Typography;

const FulfilmentOption = ({ quantity, handleFulfilmentOption }) => {
  const [selectedFulfilmentOption, setSelectedFulfilmentOption] = useState(101);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setSelectedFulfilmentOption(e.target.value);
  };

  useEffect(() => {
    handleFulfilmentOption(selectedFulfilmentOption);
  }, [selectedFulfilmentOption]);

  const checkIfStock = () => {
    if (quantity <= fulfillmentData.inStockPickUpAvailableQty) {
      return <Text style={{ color: "green" }}>&#10003; In Stock</Text>;
    } else {
      return <Text style={{ color: "grey" }}>Out of Stock</Text>;
    }
  };

  return (
    <Radio.Group onChange={onChange} value={selectedFulfilmentOption}>
      <div className="Fulfilment-option">
        <Space
          className="Fulfilment-option"
          direction="vertical"
          style={{ padding: "20px" }}
        >
          <Radio value={101}>Free In-Store or Curbside Pick Up</Radio>
          <Text style={{ paddingLeft: "25px" }}>
            {checkIfStock()} {"| "}
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
            Est. Delivery <span style={{ color: "green" }}>Apr. 08-11</span>
          </Text>
        </Space>
      </div>
    </Radio.Group>
  );
};
export default FulfilmentOption;
