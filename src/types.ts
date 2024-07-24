export interface Contact{
    id: string;
    name: string;
    phone: string;
    email: string;
    image: string;
}

export type ApiContact = Omit<Contact, 'id'>;

export interface ApiContacts {
    [id: string]: ApiContact;
}

export interface ContactMutation {
    id: string,
    name: string,
    phone: string,
    email: string,
    image: string,
}