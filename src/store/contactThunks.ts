import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../app/store.ts";
import axiosApi from "../axiosApi.ts";
import {Contact} from "./contactSlice.ts";
import {ApiContact} from "../types.ts";


export const fetchContacts = createAsyncThunk<Contact[], undefined, {dispatch: AppDispatch}> ('contacts/fetchContacts', async () => {
    const contactsResponse = await axiosApi.get('/contacts.json');
    const contacts = contactsResponse.data;

    let newContacts: Contact[] = [];

    if(contacts) {
        newContacts = Object.keys(contacts).map((key: string) => {
            const contact = contacts[key];
            return {
                id: key,
                ...contact,
            };
        });
    }


    return newContacts;
});

export const deleteContact = createAsyncThunk<void, string, {state: RootState}>('/contacts/deleteContact', async (id) => {
        await axiosApi.delete(`/contacts/${id}.json`);
    },
);

export const addContact = createAsyncThunk<void, ApiContact, {state: RootState}>(
    'contacts/addContact',
    async (apiContact) => {
        await axiosApi.post('/contacts.json', apiContact);
    },
);

interface updateContactArg {
    id: string;
    apiContact: ApiContact;
}

export const updateContact = createAsyncThunk<void, updateContactArg, {state: RootState}>(
    'contacts/updateContact',
    async ({ id, apiContact }) => {
        await axiosApi.put(`/contacts/${id}.json`, apiContact);
    }
);