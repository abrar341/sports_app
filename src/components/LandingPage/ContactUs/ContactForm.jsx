"use client";
import React from "react";
import ContactInfoCard from "./ContactInfoCard";
import ContactFormInputs from "./ContactFormInputs";

const ContactForm = () => {
    return (
        <>
            <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700;800&display=swap"
                rel="stylesheet"
            />
            <main className="relative h-full flex flex-col md:flex-row gap-6 justify-center items-end px-16 py-6  max-md:flex-col max-md:p-5 max-sm:p-4">
                <ContactInfoCard />
                <ContactFormInputs />
            </main>
        </>
    );
};

export default ContactForm;
