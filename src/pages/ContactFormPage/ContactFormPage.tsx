import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {Contact} from "../../types.ts";
import {addContact, fetchContacts, updateContact} from "../../store/contactThunks.ts";
import ContactForm from "../../components/Contacts/ContactForm.tsx";


const ContactFormPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const contacts = useAppSelector((state) => state.contact.contacts);
    const [currentContact, setCurrentContact] = useState<Contact | null>(null);
    const isLoading = useAppSelector((state) => state.contact.addLoading || state.contact.updateLoading);

    useEffect(() => {
        if (id) {
            if (contacts.length === 0) {
                dispatch(fetchContacts());
            } else {
                const contact = contacts.find((contact) => contact.id === id);
                setCurrentContact(contact || null);
            }
        }
    }, [id, contacts, dispatch]);

    const handleSubmit = (contactData: Contact) => {
        if (id) {
            dispatch(updateContact({ id, updateContactArg: contactData }));
        } else {
            dispatch(addContact(contactData));
        }
        navigate('/');
    };

    return (
        <div>
            <ContactForm onSubmit={handleSubmit} existingContact={currentContact} isLoading={isLoading} />
        </div>
    );
};

export default ContactFormPage;
