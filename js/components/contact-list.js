import React from 'react';
import Contact from './contact';

export default function ContactList(props) {
    const contacts = Object.keys(props.contacts).map((contactId, i) => {
        const person = props.contacts[contactId];
        return (
            <li key={i}>
                <Contact
                    id={person.id}
                    name={person.name}
                    tel={person.phoneNumber}
                />
            < /li>
        );
    });
    return (
        <ul>
            {contacts}
        < /ul>
    );
};
