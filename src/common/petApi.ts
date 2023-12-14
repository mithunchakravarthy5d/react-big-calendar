import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSwaggerOutput: build.query<
      GetSwaggerOutputApiResponse,
      GetSwaggerOutputApiArg
    >({
      query: () => ({ url: `/swagger-output` }),
    }),
    postServerApiV10UsersAdd: build.mutation<
      PostServerApiV10UsersAddApiResponse,
      PostServerApiV10UsersAddApiArg
    >({
      query: (queryArg) => ({
        url: `/server/api/v1.0/users/add`,
        method: "POST",
        body: queryArg.addUser,
      }),
    }),
    postServerApiV10UsersList: build.mutation<
      PostServerApiV10UsersListApiResponse,
      PostServerApiV10UsersListApiArg
    >({
      query: (queryArg) => ({
        url: `/server/api/v1.0/users/list`,
        method: "POST",
        body: queryArg.userList,
      }),
    }),
    putServerApiV10UsersEdit: build.mutation<
      PutServerApiV10UsersEditApiResponse,
      PutServerApiV10UsersEditApiArg
    >({
      query: (queryArg) => ({
        url: `/server/api/v1.0/users/edit`,
        method: "PUT",
        body: queryArg.updateUser,
      }),
    }),
    getServerApiV10UsersView: build.query<
      GetServerApiV10UsersViewApiResponse,
      GetServerApiV10UsersViewApiArg
    >({
      query: (queryArg) => ({ url: `/server/api/v1.0/users/view` }),
    }),
    deleteServerApiV10UsersRemove: build.mutation<
      DeleteServerApiV10UsersRemoveApiResponse,
      DeleteServerApiV10UsersRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/server/api/v1.0/users/remove`,
        method: "DELETE",
        body: queryArg.deleteUser,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type GetSwaggerOutputApiResponse = unknown;
export type GetSwaggerOutputApiArg = void;
export type PostServerApiV10UsersAddApiResponse =
  /** status 200 OK */ AddedUser;
export type PostServerApiV10UsersAddApiArg = {
  /** API that takes request & add new user */
  addUser: AddUser;
};
export type PostServerApiV10UsersListApiResponse =
  /** status 200 OK */ UsersList;
export type PostServerApiV10UsersListApiArg = {
  /** API that fetches all the users , if search query isprovided it will fetch user according to name and company name */
  userList: UserList;
};
export type PutServerApiV10UsersEditApiResponse =
  /** status 200 OK */ UpdatedUser;
export type PutServerApiV10UsersEditApiArg = {
  /** API that takes request & update user details */
  updateUser: UpdateUser;
};
export type GetServerApiV10UsersViewApiResponse =
  /** status 200 OK */ ViewedUser;
export type GetServerApiV10UsersViewApiArg = {
  /** API that takes request & get details of particular user */
  id: ViewUser;
};
export type DeleteServerApiV10UsersRemoveApiResponse =
  /** status 200 OK */ DeletedUser;
export type DeleteServerApiV10UsersRemoveApiArg = {
  /** API that takes request & delete a particular user */
  deleteUser: DeleteUser;
};
export type AddedUser = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: {
    name?: string;
    company?: string;
    gender?: string;
    dob?: string;
    countryCode?: string;
    mobile?: string;
    mobileWithCountryCode?: string;
    role?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
  };
};
export type AddUser = {
  name: string;
  company: string;
  gender: string;
  dob: string;
  countryCode: string;
  mobile: string;
  mobileWithCountryCode: string;
  role: string;
};
export type UsersList = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: {
    name?: string;
    company?: string;
    gender?: string;
    dob?: string;
    countryCode?: string;
    mobile?: string;
    mobileWithCountryCode?: string;
    role?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
  }[];
};
export type UserList = {
  searchQuery: string;
};
export type UpdatedUser = {
  statusCode?: number;
  success?: boolean;
  message?: string;
};
export type UpdateUser = {
  id: string;
  name: string;
  company: string;
  gender: string;
  dob: string;
  role: string;
};
export type ViewedUser = {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: {
    name?: string;
    company?: string;
    gender?: string;
    dob?: string;
    countryCode?: string;
    mobile?: string;
    mobileWithCountryCode?: string;
    role?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
  };
};
export type ViewUser = {
  id: string;
};
export type DeletedUser = {
  message?: string;
};
export type DeleteUser = {
  id: string;
};
export const {
  useGetSwaggerOutputQuery,
  usePostServerApiV10UsersAddMutation,
  usePostServerApiV10UsersListMutation,
  usePutServerApiV10UsersEditMutation,
  useGetServerApiV10UsersViewQuery,
  useDeleteServerApiV10UsersRemoveMutation,
} = injectedRtkApi;
