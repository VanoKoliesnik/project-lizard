import { Email, Password } from "@components";
import { RoutesPaths } from "@enums";
import { Button, Form } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

type Values = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const onFinish = (values: Values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <Title level={2}>Login</Title>

      <Form onFinish={onFinish}>
        <Email />
        <Password />

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
          Or <Link to={RoutesPaths.Registration}>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
