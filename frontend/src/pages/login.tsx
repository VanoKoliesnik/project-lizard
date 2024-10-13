import { Email, Password } from "@components";
import { RoutesPaths } from "@enums";
import useLoginUser from "@hooks/useLogin";
import { useAppSelector } from "@store/index";
import { User } from "@type/user";
import { Button, Form, message } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

type Credentials = Pick<User, "email" | "password">;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const token = useAppSelector(({ auth: { token } }) => token);
  const { loginUser } = useLoginUser();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (token) {
      navigate(RoutesPaths.Profile);
    }
  }, [token, navigate]);

  const onFinish = async (credentials: Credentials) => {
    const { result, reason = "" } = await loginUser(credentials);

    switch (result) {
      case "success":
        navigate(RoutesPaths.Profile);
        break;

      case "error":
        messageApi.error(reason);
        break;
    }
  };

  return (
    <div>
      {contextHolder}
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
