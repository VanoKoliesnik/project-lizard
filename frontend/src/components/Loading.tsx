import { Spin } from "antd";
import React from "react";

type Props = {
  fullscreen?: boolean;
};

export const Loading: React.FC<Props> = ({ fullscreen = false }) => {
  return <Spin size="large" fullscreen={fullscreen} />;
};
