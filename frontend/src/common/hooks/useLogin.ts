import srp from "secure-remote-password/client";
import { User } from "@type/user";
import { RequestResult } from "@type/api";
import { useLoginMutation, useVerifyMutation } from "@api/auth";
import { useAppDispatch } from "@store/index";
import { setAuthToken } from "@store/slices/auth.slice";

type Credentials = Pick<User, "email" | "password">;

const useLoginUser = () => {
  const [loginRequest] = useLoginMutation();
  const [verifyRequest] = useVerifyMutation();
  const dispatch = useAppDispatch();

  const loginUser = async ({
    email,
    password,
  }: Credentials): Promise<RequestResult> => {
    const { salt, serverPublicKey } = await loginRequest({ email }).unwrap();

    const clientEphemeral = srp.generateEphemeral();
    const privateKey = srp.derivePrivateKey(salt, email, password);
    const clientSession = srp.deriveSession(
      clientEphemeral.secret,
      serverPublicKey,
      salt,
      email,
      privateKey
    );

    try {
      const { serverProof, token } = await verifyRequest({
        email,
        clientProof: clientSession.proof,
        clientPublicKey: clientEphemeral.public,
      }).unwrap();

      srp.verifySession(clientEphemeral.public, clientSession, serverProof);

      dispatch(setAuthToken(token));

      return {
        result: "success",
      };
    } catch {
      dispatch(setAuthToken(null));

      return {
        result: "error",
        reason: "Invalid credentials",
      };
    }
  };

  return { loginUser };
};

export default useLoginUser;
