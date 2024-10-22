import { Button, Flex } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { Loading } from './Loading';
import { ProfileMode } from '@/common/enums';
import { useGetUserQuery } from '@/common/api/user';
import { useAppDispatch } from '@/store';
import { logout } from '@/store/slices/auth.slice';

type Props = {
  setMode: React.Dispatch<React.SetStateAction<ProfileMode>>;
};

export const ProfileCard: React.FC<Props> = ({ setMode }) => {
  const { data, isFetching } = useGetUserQuery();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const switchToEditMode = () => {
    setMode(ProfileMode.Edit);
  };

  if (isFetching) {
    return (
      <Flex align="center" justify="center">
        <Loading />
      </Flex>
    );
  }

  return (
    <>
      <Typography>
        <strong>Name:</strong> {data.username}
      </Typography>

      <Typography>
        <strong>Email:</strong> {data.email}
      </Typography>

      <div style={{ marginTop: 20 }}>
        <Button
          color="primary"
          variant="solid"
          style={{ marginRight: 10 }}
          onClick={switchToEditMode}
          disabled={isFetching}
        >
          Edit
        </Button>
        <Button
          color="danger"
          variant="outlined"
          onClick={handleLogout}
          disabled={isFetching}
        >
          Logout
        </Button>
      </div>
    </>
  );
};
