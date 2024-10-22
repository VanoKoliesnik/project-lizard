import srp from 'secure-remote-password/client';
import { User } from '../types/user';
import { useRegisterMutation } from '../api/auth';
import { RequestResult } from '../types/api';

type Credentials = Pick<User, 'username' | 'email' | 'password'>;

const useRegisterUser = () => {
  const [registerRequest] = useRegisterMutation();

  const registerUser = async ({
    email,
    username,
    password,
  }: Credentials): Promise<RequestResult> => {
    const salt = srp.generateSalt();
    const privateKey = srp.derivePrivateKey(salt, email, password);
    const verifier = srp.deriveVerifier(privateKey);

    return registerRequest({
      username,
      email,
      salt,
      verifier,
    })
      .unwrap()
      .then((): RequestResult => {
        return { result: 'success' };
      })
      .catch((error) => {
        return { result: 'error', reason: error?.data?.message };
      });
  };

  return { registerUser };
};

export default useRegisterUser;
