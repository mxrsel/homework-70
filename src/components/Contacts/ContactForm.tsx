import React, {useState} from 'react';
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

const [contactData, setContactData] = useState<Contact>(initialState)

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