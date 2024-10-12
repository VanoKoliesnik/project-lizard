import { Form, FormInstance, Input } from "antd";
import { RuleObject } from "antd/es/form";
import React from "react";

type ConfirmPasswordProps = {
  form: FormInstance;
};

export const ConfirmPassword: React.FC<ConfirmPasswordProps> = ({ form }) => {
  const validateConfirmPassword = (_: RuleObject, value: string) => {
    const password = form.getFieldValue("password");
    if (value && value !== password) {
      return Promise.reject(new Error("Passwords do not match!"));
    }
    return Promise.resolve();
  };

  return (
    <Form.Item
      name="confirm"
      rules={[
        { required: true, message: "Please confirm your password!" },
        { validator: validateConfirmPassword },
      ]}
    >
      <Input.Password placeholder="Confirm Password" />
    </Form.Item>
  );
};
