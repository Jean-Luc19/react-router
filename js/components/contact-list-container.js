import React from 'react';
import CONTACTS from '../contacts';
import ContactList from './contact-list.js';

export default function ContactListContainer () {
    return (
        <ContactList contacts={CONTACTS} />
    );
};
