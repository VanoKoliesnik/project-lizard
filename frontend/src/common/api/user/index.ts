import { HttpMethod } from '@/common/enums';
import { User } from '@/common/types/user';
import { apiSlice } from '@/store/slices/api.slice';

type GetUserResponse = Pick<User, 'username' | 'email'>;

type UpdateUserArgs = Pick<User, 'username'>;

export const { useGetUserQuery, useUpdateUsernameMutation } =
  apiSlice.injectEndpoints({
    endpoints: (build) => ({
      getUser: build.query<GetUserResponse, void>({
        query: () => ({ url: 'user' }),
        providesTags: ['User'],
      }),

      updateUsername: build.mutation<GetUserResponse, UpdateUserArgs>({
        query: (body) => ({
          url: 'user/username',
          body,
          method: HttpMethod.Patch,
        }),
        invalidatesTags: ['User'],
      }),
    }),
  });
