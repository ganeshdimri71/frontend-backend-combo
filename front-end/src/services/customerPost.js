import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// It is used to define our endpoints and allow to create the API slice
export const customerPostApi = createApi({
  // The unique key that defines where the Redux store will store our cache.
  reducerPath: "customerPostApi",

  // The base query to request data.
  // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/accounts/"
  }),

  // The set of operations that we want to perform against the server.
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "list/",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          url: `customer/${id}/`,
          method: "GET",
        };
      },
    }),

    getPostByLimit: builder.query({
      query: (num) => {
        return {
          url: `posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deletePost: builder.mutation({
      query: (id) => {
        return {
          url: `delete/${id}/`,
          method: "DELETE",
        };
      },
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        let result = Array.isArray(newPost.fullName);
        let resultTwo = Array.isArray(newPost.email);
        let resultThree = Array.isArray(newPost.mobile);
        let resultFour = Array.isArray(newPost.password);
        let dataToBePosted = {
          fullName: result ? newPost.fullName[0] : newPost.fullName,
          email: resultTwo ? newPost.email[0] : newPost.email,
          mobile: resultThree ? newPost.mobile[0] : newPost.mobile,
          password: resultFour ? newPost.password[0] : newPost.password,
        };

        return {
          url: `create/`,
          method: "POST",
          body: dataToBePosted,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    updatePost: builder.mutation({
      query: (updatePostData) => {
        let { id, ...data } = updatePostData;
        let result = Array.isArray(data.fullName);
        let resultTwo = Array.isArray(data.email);
        let resultThree = Array.isArray(data.mobile);
        let resultFour = Array.isArray(data.password);
        let dataToBeUpdated = {
          fullName: result ? data.fullName[0] : data.fullName,
          email: resultTwo ? data.email[0] : data.email,
          mobile: resultThree ? data.mobile[0] : data.mobile,
          password: resultFour ? data.password[0] : data.password,
        };

        return {
          url: `update/${id}/`,
          method: "PUT",
          body: dataToBeUpdated,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = customerPostApi;
