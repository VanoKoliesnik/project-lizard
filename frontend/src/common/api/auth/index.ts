import { HttpMethod } from '@/common/enums';
import { User } from '@/common/types/user';
import { apiSlice } from '@/store/slices/api.slice';

type RegisterResponse = { message: string };
type RegisterArgs = Pick<User, 'username' | 'email' | 'salt' | 'verifier'>;

type LoginResponse = { salt: string; serverPublicKey: string };
type LoginArgs = Pick<User, 'email'>;

type VerifyResponse = { serverProof: string; token: string };
type VerifyArgs =
  | Pick<User, 'email'>
  | {
      clientProof: string;
      clientPublicKey: string;
    };

export const { useRegisterMutation, useLoginMutation, useVerifyMutation } =
  apiSlice.injectEndpoints({
    endpoints: (build) => ({
      register: build.mutation<RegisterResponse, RegisterArgs>({
        query: (body) => ({
          url: 'auth/register',
          method: HttpMethod.Post,
          body,
        }),
      }),

      login: build.mutation<LoginResponse, LoginArgs>({
        query: (body) => ({
          url: 'auth/login',
          method: HttpMethod.Post,
          body,
        }),
      }),

      verify: build.mutation<VerifyResponse, VerifyArgs>({
        query: (body) => ({
          url: 'auth/verify',
          method: HttpMethod.Post,
          body,
        }),
      }),
    }),
  });
