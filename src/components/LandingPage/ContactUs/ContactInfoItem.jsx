"use client";
import React from "react";

const ContactInfoItem = ({ icon, title, value }) => {
  return (
    <article className="flex gap-1.5 items-center">
      <div className="flex justify-center items-center p-2 w-10 h-10 bg-slate-900 rounded-[100px]">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xs tracking-wide leading-5 text-white capitalize">
          {title}
        </h3>
        <p className="text-xs font-medium text-white capitalize break-words whitespace-normal max-w-[150px] sm:max-w-[400px]">
          {value}
        </p>
      </div>
    </article>
  );
};

export default ContactInfoItem;
