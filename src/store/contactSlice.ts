import {createSlice} from "@reduxjs/toolkit";

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
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
})