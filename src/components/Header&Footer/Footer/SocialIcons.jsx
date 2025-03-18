import React from "react";

function SocialIcons() {
    return (
        <div className="flex gap-2 items-center self-stretch my-auto min-w-60">
            <SocialIconLink
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91d4575fb2473c66f689c4ce64cbcb5535d8b42d8c00b28f90e704cb1e9c6371?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                alt="Twitter"
            />
            <SocialIconLink
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1299412ccf0ccf0a6dfec9cc304d657c137f9e98cee7a3920367aa440478316?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                alt="YouTube"
            />
            <SocialIconLink
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb57363e4757ddb1712998339fd7edf53e3d55bbe3e825b7374762459328378e?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                alt="LinkedIn"
            />
            <SocialIconLink
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/465ace1fb3c5e953e3419b9b91bc4185042397e3f2e125b44f03d047ab417c5d?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                alt="TikTok"
            />
        </div>
    );
}

function SocialIconLink({ src, alt }) {
    return (
        <a
            href="#"
            className="flex justify-center items-center self-stretch px-6 my-auto w-16 h-16 rounded-xl bg-white bg-opacity-0 min-h-16 max-md:px-5"
        >
            <div className="overflow-hidden flex-1 shrink self-stretch my-auto w-full basis-0 max-w-16">
                <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-5">
                    <img
                        src={src}
                        alt={alt}
                        className="object-contain w-5 aspect-square"
                    />
                </div>
            </div>
        </a>
    );
}

export default SocialIcons;
