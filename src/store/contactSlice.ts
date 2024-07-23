import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../app/store.ts";
import axiosApi from "../axiosApi.ts";

interface Contact{
    id: string;
    name: string;
    phone: string;
    email: string;
    image: string;
}

export interface ContactState {
    contacts: Contact[];
    loading: boolean;
    error: string | null
}

const initialState: ContactState = {
    contacts: [],
    loading: false,
    error: null,
};

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
});

export const addContact = createAsyncThunk<void, Contact, {state: RootState}>(
    'contacts/addContact',
    async (contact) => {
        await axiosApi.post('/contacts.json', contact);
    }
);

interface updateContactArg {
    id: string;
    Contact: Contact
}

export const updateContact = createAsyncThunk<void, updateContactArg, {state: RootState}>(
    'contacts/updateContact',
    async ({ id, Contact }) => {
        await axiosApi.put(`/contacts/${id}.json`, Contact);
    }
);


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, {payload: contacts}) => {
                state.loading = false;
                state.contacts = contacts;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
            })
            .addCase(deleteContact.fulfilled, (state) => {
                state.loading = false;
            })
            builder
            .addCase(addContact.pending, (state) => {
                state.loading = true;
            })
                .addCase(addContact.fulfilled, (state) => {
                    state.loading = false;
                })
                .addCase(addContact.rejected, (state) => {
                    state.loading = false;
                })
            builder
                .addCase(updateContact.pending, (state) => {
                    state.loading = true;
                })
                .addCase(updateContact.fulfilled, (state) => {
                    state.loading = false;
                })
                .addCase(updateContact.rejected, (state) => {
                    state.loading = false;
                })
    }
});

export const  contactReducer = contactSlice.reducer;
