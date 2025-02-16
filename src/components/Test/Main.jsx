"use client";
import * as React from "react";
import { LoginForm } from "./LoginForm";
import { SocialLogin } from "./SocialLogin";

export default function Main() {
  return (
    <main className="overflow-hidden bg-primary  px-40 border max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* <section className="w-[66%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4f3c408f0d915453e90134601aa30b9c2720604859b57c16c92373e9cb17c66?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
            className="object-contain grow w-full aspect-[0.87] max-md:mt-10 max-md:max-w-full"
            alt="Dashboard illustration"
          />
        </section> */}
        <section className="ml-5 min-h-[100vh]  max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <header className="flex flex-col justify-center self-center max-w-full text-white w-[300px]">
              <h1 className="text-2xl  text-center font-bold leading-tight">
                Nice to see you!
              </h1>
              <p className="mt-2 text-sm text-center  text-gray-400  leading-snug capitalize">
                Enter your email and password to sign in
              </p>
            </header>
            <div className="flex border flex-col px-4 pt-4 pb-14 mt-2 w-full rounded-[25px] max-md:px-5 max-md:max-w-full">
              <SocialLogin />
              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
