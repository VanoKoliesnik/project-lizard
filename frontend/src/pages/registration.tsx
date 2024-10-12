import { ConfirmPassword, Email, Password, Username } from "@components";
import { RoutesPaths } from "@enums";
import { Button, Form } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

type Values = {
  username: string;
  email: string;
  password: string;
};

export const Registration: React.FC = () => {
  const [form] = Form.useForm<Values>();

  const onFinish = (values: Values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <Title level={2}>Registration</Title>

      <Form form={form} onFinish={onFinish}>
        <Username />
        <Email />
        <Password />
        <ConfirmPassword form={form} />

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Register
          </Button>
          Or <Link to={RoutesPaths.Login}>login now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
