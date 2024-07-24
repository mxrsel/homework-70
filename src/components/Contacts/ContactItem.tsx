import React from 'react';
import {Contact} from "../../types.ts";

interface Props {
    contact: Contact;
    onClick: () => void;
}

const ContactItem: React.FC<Props> = ({ contact, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <strong>{contact.name}</strong>
            <div>{contact.phone}</div>
        </div>
    );
};

export default ContactItem;