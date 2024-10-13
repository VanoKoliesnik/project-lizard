import { User } from "@type/user";
import React from "react";
import { Username } from "./inputs";
import { ProfileMode } from "@enums";
import { Button, Form, message } from "antd";
import { useGetUserQuery, useUpdateUsernameMutation } from "@api/user";

type Props = {
  setMode: React.Dispatch<React.SetStateAction<ProfileMode>>;
};

export const ProfileCardEditor: React.FC<Props> = ({ setMode }) => {
  const {
    data: { username },
    isFetching: isUserFetching,
  } = useGetUserQuery();
  const [
    updateUsername,
    { isLoading: isUsernameUpdateLoading, isSuccess: isUsernameUpdateSuccess },
  ] = useUpdateUsernameMutation();
  const [messageApi, contextHolder] = message.useMessage();

  const switchToViewMode = () => {
    setMode(ProfileMode.View);
  };

  const onFinish = async ({ username }: Pick<User, "username">) => {
    try {
      await updateUsername({ username }).unwrap();

      messageApi.success("Username update successful");
      setTimeout(switchToViewMode, 1000);
    } catch {
      messageApi.error("Error during username update");
    }
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        disabled={
          isUserFetching || isUsernameUpdateLoading || isUsernameUpdateSuccess
        }
      >
        {contextHolder}
        <Username initialValue={username} showLabel />
        <Form.Item>
          <div style={{ marginTop: 20 }}>
            <Button
              color="primary"
              variant="solid"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              Save
            </Button>

            <Button variant="outlined" onClick={switchToViewMode}>
              Cancel
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
