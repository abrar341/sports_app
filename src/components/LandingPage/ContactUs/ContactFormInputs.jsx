"use client";
import React from "react";

const ContactFormInputs = () => {
  return (
    <form className="  flex flex-col h-full gap-4 p-6 rounded-xl border  w-[805px] max-md:w-full">
      <div className="flex gap-4 max-sm:flex-col">
        <input
          type="text"
          placeholder="name"
          className="px-6 py-0 outline-none w-full h-12 text-base text-white bg-slate-900 border-[none] rounded-[100px]"
          aria-label="Your name"
        />
        <input
          type="email"
          placeholder="email"
          className="px-6 py-0 outline-none w-full h-12 text-base text-white bg-slate-900 border-[none] rounded-[100px]"
          aria-label="Your email"
        />
      </div>
      <input
        type="tel"
        placeholder="phone number"
        className="px-6 py-0 outline-none w-full h-12 text-base text-white bg-slate-900 border-[none] rounded-[100px]"
        aria-label="Your phone number"
      />
      <select
        aria-label="Select service"
        className="px-6 py-0 outline-none w-full h-12 text-base text-white bg-slate-900 border-[none] rounded-[100px]"
        defaultValue=""
      >
        <option value="" disabled>
          select service
        </option>
        <option value="service1">Service 1</option>
        <option value="service2">Service 2</option>
        <option value="service3">Service 3</option>
      </select>
      <textarea
        placeholder="type your message"
        className="px-6 py-5 outline-none w-full text-base text-white rounded-xl resize-none bg-slate-900 border-[none] h-[124px]"
        aria-label="Your message"
      />
      <button
        type="submit"
        className="h-10 text-lg text-white capitalize bg-blue-600 cursor-pointer border-[none] rounded-[100px] w-[300px] max-sm:w-full"
      >
        submit
      </button>
    </form>
  );
};

export default ContactFormInputs;
