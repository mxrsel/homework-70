import React, { useEffect, useState } from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {Contact} from "../../types.ts";
import {fetchContacts} from "../../store/contactThunks.ts";
import ContactItem from "./ContactItem.tsx";
import Modal from "../Modal/Modal.tsx";



const ContactList: React.FC = () => {
    const dispatch = useAppDispatch();
    const contacts = useAppSelector((state) => state.contact.contacts);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedContact(null);
    };

    return (
        <div>
            {contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} onClick={() => handleContactClick(contact)} />
            ))}
            {selectedContact && (
                <Modal show={showModal} title="Contact Details" onClose={handleCloseModal}>
                    <div>
                        <img src={selectedContact.image} alt={selectedContact.name} style={{ width: '100px', height: '100px' }} />
                    </div>
                    <div>
                        <strong>Имя:</strong> {selectedContact.name}
                    </div>
                    <div>
                        <strong>Номер телефона:</strong> {selectedContact.phone}
                    </div>
                    <div>
                        <strong>Электронная почта:</strong> {selectedContact.email}
                    </div>
                    <button onClick={() => console.log('Edit clicked')}>Edit</button>
                    <button onClick={() => console.log('Delete clicked')}>Delete</button>
                </Modal>
            )}
        </div>
    );
};

export default ContactList;
