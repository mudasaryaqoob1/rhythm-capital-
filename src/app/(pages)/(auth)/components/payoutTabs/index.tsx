import React, { useState } from "react";
import { Tabs } from "antd";
import { Payout } from "../payout";
import { PayoutMethods } from "../payoutMethods";
const PayoutTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1"); // Default Active Tab

  const items = [
    {
      label: "Payout",
      key: "1",
      children: (
        <div>
          <Payout />
        </div>
      ),
    },
    {
      label: "Payout Method",
      key: "2",
      children: (
        <div>
          <PayoutMethods />
        </div>
      ),
    },
  ];

  const onTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <div className="">
        <Tabs activeKey={activeKey} onChange={onTabChange} items={items} />;
      </div>
    </>
  );
};

export default PayoutTabs;
