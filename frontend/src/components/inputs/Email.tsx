import { Form, Input } from "antd";
import React from "react";

export const Email: React.FC = () => {
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: "Email is required" },
        { type: "email", message: "Email is not valid" },
      ]}
    >
      <Input placeholder="Email" />
    </Form.Item>
  );
};
