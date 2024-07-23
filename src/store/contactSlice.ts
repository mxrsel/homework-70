import {createSlice} from "@reduxjs/toolkit";
import {addContact, deleteContact, fetchContacts, updateContact} from "./contactThunks.ts";
import {Contact} from "../types.ts";



export interface ContactState {
    contacts: Contact[];
    fetchLoading: boolean;
    deleteLoading: boolean;
    addLoading: boolean;
    updateLoading: boolean;
}

const initialState: ContactState = {
    contacts: [],
    fetchLoading: false,
    deleteLoading: false,
    addLoading: false,
    updateLoading: false,
};




const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, {payload: contacts}) => {
                state.fetchLoading = false;
                state.contacts = contacts;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.fetchLoading = false;
            })
            .addCase(deleteContact.pending, (state) => {
                state.deleteLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state) => {
                state.deleteLoading = false;
            })
            .addCase(deleteContact.rejected, (state) => {
                state.deleteLoading = false;
            })
            builder
            .addCase(addContact.pending, (state) => {
                state.addLoading = true;
            })
                .addCase(addContact.fulfilled, (state) => {
                    state.addLoading = false;
                })
                .addCase(addContact.rejected, (state) => {
                    state.addLoading = false;
                })
            builder
                .addCase(updateContact.pending, (state) => {
                    state.updateLoading= true;
                })
                .addCase(updateContact.fulfilled, (state) => {
                    state.updateLoading = false;
                })
                .addCase(updateContact.rejected, (state) => {
                    state.updateLoading = false;
                })
    },
    selectors: {
        selectContacts: (state) => state.contacts,
        selectFetchContactsLoading: (state) => state.fetchLoading,
        selectDeleteContactLoading: (state) => state.deleteLoading,
        selectAddContactLoading: (state) => state.addLoading,
        selectUpdateContactLoading: (state) => state.updateLoading,
    },
});

export const  contactReducer = contactSlice.reducer;

export const {
    selectContacts,
    selectFetchContactsLoading,
    selectDeleteContactLoading,
    selectAddContactLoading,
    selectUpdateContactLoading,
} = contactSlice.selectors;
