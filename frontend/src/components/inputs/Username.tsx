import { USERNAME_REGEXP } from "@constants";
import { Form, Input } from "antd";
import React from "react";

export const Username: React.FC = () => {
  return (
    <Form.Item
      name="username"
      rules={[
        { required: true, message: "Username is required" },
        {
          pattern: USERNAME_REGEXP,
          message: "Must contain only letters or numbers",
        },
        { min: 3, message: "Must be at least 3 characters long" },
        { max: 16, message: "Must be no longer than 16 characters" },
      ]}
    >
      <Input placeholder="Email" />
    </Form.Item>
  );
};
