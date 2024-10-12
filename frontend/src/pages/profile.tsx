import { Button, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export const Profile: React.FC = () => {
  return (
    <div>
      <Title level={2}>Login</Title>

      <Typography>
        <strong>Name:</strong> Test Name
      </Typography>

      <Typography>
        <strong>Email:</strong> Test Email
      </Typography>

      <Button>Settings</Button>
      <Button>Logout</Button>
    </div>
  );
};
