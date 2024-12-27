import React, { useEffect, useState } from "react";
import { Radio, Space, Typography } from "antd";

const { Text } = Typography;
const DeliveryMethod = (props) => {
  const [delivery, setDelivery] = useState("Pick Up");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setDelivery(e.target.value);
  };

  useEffect(() => {
    props.handleDeliveryMethod(delivery);
  }, [delivery]);

  return (
    <>
      <Radio.Group onChange={onChange} value={delivery}>
        <Space direction="vertical">
          <Radio value={"Pick Up"}>Free In-Store or Curbside Pick Up</Radio>
          <Radio value={"Home Delivery"}>Home Delivery</Radio>
        </Space>
      </Radio.Group>
    </>
  );
};
export default DeliveryMethod;
