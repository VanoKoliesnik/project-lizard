import { Flex } from 'antd';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <Flex align="center" justify="center">
      <div style={{ paddingTop: 100, minWidth: 312 }}>{children}</div>
    </Flex>
  );
};
