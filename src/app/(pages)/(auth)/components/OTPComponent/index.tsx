import React from "react";
import { Form, Button, Input } from "antd";

const OTPForm: React.FC = () => {
  const handleFinish = (values: any) => {
    console.log("Form Submitted:", values); // Log submitted form values
  };

  return (
    <Form layout="vertical" onFinish={handleFinish}>
      {/* OTP Input Field with 6 boxes and dashes after the third input */}
      <Form.Item
        label="Enter OTP"
        rules={[{ required: true, message: "Please enter the OTP!" }]}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* First Three Inputs */}
          <Input
            type="text"
            maxLength={1}
            defaultValue="0"
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
          <Input
            type="text"
            maxLength={1}
            defaultValue="0"
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
          <Input
            type="text"
            defaultValue="0"
            maxLength={1}
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
          {/* Dash after 3rd input */}
          <span style={{ fontSize: "24px", marginRight: "10px" }}>-</span>

          {/* Last Three Inputs */}
          <Input
            type="text"
            maxLength={1}
            defaultValue="0"
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
          <Input
            type="text"
            maxLength={1}
            defaultValue="0"
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
          <Input
            type="text"
            maxLength={1}
            defaultValue="0" // Default value as 0
            style={{
              width: "44.57px",
              height: "64px",
              textAlign: "center",
              marginRight: "10px",
              borderRadius: "8px",
              fontSize: "18px", // Larger font size
              color: "#9DA1A9", // Red color for zero
            }}
            className="otp-input"
          />
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          href="/ReNewPassword"
          className="py-[10px] text-black border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform rounded-[8px] px-24 md:px-[140.5px]"
          type="primary"
          htmlType="submit"
        >
          Confirm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OTPForm;
