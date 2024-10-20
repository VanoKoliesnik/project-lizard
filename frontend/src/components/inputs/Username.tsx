import { USERNAME_REGEXP } from '@/common/constants';
import { Form, Input } from 'antd';
import React from 'react';

type Props = {
  showLabel?: boolean;
  initialValue?: string;
};

export const Username: React.FC<Props> = ({
  initialValue,
  showLabel = false,
}) => {
  return (
    <Form.Item
      name="username"
      initialValue={initialValue}
      label={showLabel ? 'Username' : null}
      rules={[
        { required: true, message: 'Username is required' },
        {
          pattern: USERNAME_REGEXP,
          message: 'Must contain only letters or numbers',
        },
        { min: 3, message: 'Must be at least 3 characters long' },
        { max: 16, message: 'Must be no longer than 16 characters' },
      ]}
    >
      <Input placeholder="Username" />
    </Form.Item>
  );
};
