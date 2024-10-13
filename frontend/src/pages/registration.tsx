import { ConfirmPassword, Email, Password, Username } from "@components";
import { RoutesPaths } from "@enums";
import useRegisterUser from "@hooks/useRegister";
import { User } from "@type/user";
import { Button, Form, message } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Credentials = Pick<User, "username" | "email" | "password">;

export const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const { registerUser } = useRegisterUser();

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm<Credentials>();

  const onFinish = async (credentials: Credentials) => {
    const { result } = await registerUser(credentials);

    switch (result) {
      case "success":
        messageApi.success("Registration successful");
        setTimeout(() => {
          navigate(RoutesPaths.Login);
        }, 1000);
        break;

      case "error":
        messageApi.error("Registration error");
        break;
    }
  };

  return (
    <div>
      {contextHolder}
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
