import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({

  reducerPath: "contactsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3031",
  }),

  tagTypes: ["Contact"],

  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/user",
      providesTags: ["Contact"]
    }),

    contact: builder.query<Contact[], number>({
      query: (id) => `/user/${id}`,
      providesTags: ["Contact"]
    }),

    addContact: builder.mutation<void, Contact>({
      query: (contact) => ({
        url: "/user",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"]
    }),

    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Contact"]
    }),

    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"]
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
