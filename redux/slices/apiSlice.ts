import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userInfo } from "os";
import { APIEndpoints } from "../../data";
import { UserInfo, Education,} from "../../types/user";

var token: string | null;
const getUserToken = async () => {
  token = await localStorage.getItem("heiloUserToken");
  console.log(token);
};
getUserToken();

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.apiUrl,
    prepareHeaders: (headers) => {
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes:['UserInfo','Education'],
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfo[],void>({
      query: () => APIEndpoints.getUserInfo,
    }),
    updateEducation:builder.mutation<Education,void>({
      query: (payload) => ({
        url: `${APIEndpoints.studentInfo}/update`,
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json;',
        },
      }),
    }),
    updateBasicInfo:builder.mutation({
      query:(payload)=>({
        url: `${APIEndpoints.studentInfo}/update`,
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
          'Content-type': 'application/json;',
        },
      }),
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserInfoQuery,useUpdateBasicInfoMutation,useUpdateEducationMutation } = userApi;
