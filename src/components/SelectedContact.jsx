import { useState, useEffect } from "react";
import "./SelectedContact.css";
const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
                console.log(result);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        }
        fetchContact();
    }, [setSelectedContactId]);

    return (
        <div>
            {contact ? (
                <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>
                        <b>Name:</b> {contact.name}
                    </p>
                    <p>
                        <b>Username:</b> {contact.username}
                    </p>
                    <p>
                        <b>Email:</b> {contact.email}
                    </p>
                    <p>
                        <b>Phone:</b> {contact.phone}
                    </p>
                    <address>
                        <b>Address:</b>{" "}
                        {`${contact.address.street}
                        ${contact.address.suite}, ${contact.address.zipcode} `}
                    </address>
                    <p>
                        <b>Website:</b>{" "}
                        <a href="kaleb.us" style={{ textDecoration: "none" }}>
                            {contact.website}
                        </a>
                    </p>

                    <button onClick={() => setSelectedContactId(null)}>
                        Go Back
                    </button>
                </div>
            ) : (
                <p>Loading contact details...</p>
            )}
        </div>
    );
};

export default SelectedContact;
