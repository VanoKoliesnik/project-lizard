import { PASSWORD_REGEXP } from "@constants";
import { Form, Input } from "antd";
import React from "react";

export const Password: React.FC = () => {
  return (
    <Form.Item
      name="password"
      rules={[
        { required: true, message: "Password is required" },
        { min: 8, message: "Must be at least 8 characters long" },
        {
          pattern: PASSWORD_REGEXP,
          message: "Must contain only letters, numbers or !@#$%^&*",
        },
      ]}
    >
      <Input.Password placeholder="Password" />
    </Form.Item>
  );
};
