import React, {ChangeEvent, useState} from 'react';
import {Contact, ContactMutation} from "../../types.ts";

interface Props {
    onSubmit: (contact: Contact) => void;
    existingContact?: Contact;
    isLoading?: boolean;
}

const emptyState: ContactMutation = {
    id: '',
    name: '',
    phone: '',
    email: '',
    image: '',
}

const ContactForm: React.FC<Props> = ({
    onSubmit,
    existingContact,
    isLoading = false
}) => {
    const initialState: ContactMutation = existingContact
    ? {...existingContact, phone: existingContact.phone.toString() }
        :emptyState

const [contactData, setContactData] = useState<Contact>(initialState);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setContactData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(contactData);
    };

    return (
        <div>
            <form>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Number:
                        <input
                            type="text"
                            name="number"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required/>
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="url"
                            name="image"
                            required
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;