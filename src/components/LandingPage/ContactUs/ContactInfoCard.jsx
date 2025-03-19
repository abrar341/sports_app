"use client";
import React from "react";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfoCard = () => {
    const contactItems = [
        {
            icon: `<svg id="2122:849" layer-name="call-02-stroke-rounded 1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M9.15826 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.16381 3.69101C7.91708 3.40694 7.59547 3.19794 7.23568 3.08785C6.94859 3 6.62446 3 5.97621 3C5.02791 3 4.55376 3 4.15573 3.18229C3.68687 3.39702 3.26344 3.86328 3.09473 4.3506C2.95151 4.76429 2.99254 5.18943 3.07458 6.0397C3.94791 15.0902 8.90982 20.0521 17.9603 20.9254C18.8106 21.0075 19.2358 21.0485 19.6494 20.9053C20.1368 20.7366 20.603 20.3131 20.8178 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0824 15.6393 19.7862 15.5077 19.1938 15.2444L18.2878 14.8417C17.6463 14.5566 17.3255 14.4141 16.9996 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5064 14.8544 14.967 15.3038C14.4302 15.7512 14.1618 15.9749 13.8338 16.0947C13.543 16.2009 13.1586 16.2403 12.8524 16.1951C12.5069 16.1442 12.2424 16.0029 11.7133 15.7201C10.0673 14.8405 9.15953 13.9328 8.27987 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64662 7.3124 9.61695 7.00048C9.58594 6.67452 9.44338 6.35376 9.15826 5.71223Z" stroke="white" stroke-width="1.5" stroke-linecap="round"></path> </svg>`,
            title: "call us for inquery",
            value: "+92 (564) 2376 2396",
        },
        {
            icon: `<svg id="2122:858" layer-name="mail-01-stroke-standard (1) 1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M22 7L12.8944 11.5528C12.3314 11.8343 11.6686 11.8343 11.1056 11.5528L2 7" stroke="white" stroke-width="1.5" stroke-linejoin="round"></path> </svg>`,
            title: "email inquery",
            value: "demofd@example.com",
        },
        {
            icon: `<svg id="2122:868" layer-name="location-01-stroke-rounded (1) 1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 24px; height: 24px"> <path d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z" stroke="white" stroke-width="1.5"></path> <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="white" stroke-width="1.5"></path> </svg>`,
            title: "visit our office",
            value: "15meniel lane,front line berlin",
        },
    ];

    return (
        <section className="flex flex-col gap-3 px-6 pt-5 pb-5 rounded-xl border  w-[491px] max-md:w-full">
            <h1 className="text-2xl font-extrabold text-white capitalize">
                contact us
            </h1>
            <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-2 items-center text-center">
                    <h2 className="text-lg font-bold text-white capitalize">
                        We'd Love to Hear From You!
                    </h2>
                    <p className="text-xs tracking-wide leading-5 text-white capitalize">
                        Reach out to us with your questions, feedback, or inquiries. Our
                        team is here to help!
                    </p>
                </header>
                <div className="flex flex-col">
                    {contactItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <ContactInfoItem
                                icon={item.icon}
                                title={item.title}
                                value={item.value}
                            />
                            {index < contactItems.length - 1 && (
                                <hr className="mx-0 my-6 h-px bg-zinc-300" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoCard;
