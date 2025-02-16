export function SocialLogin() {
    return (
        <>
            <p className="self-center text-base leading-tight text-center text-white">
                Register with
            </p>
            <div className="flex gap-4 self-center mt-6 max-w-full">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0fce944af645d48f7ead275af2355753e0ec4adc5d467389a7ad6325bc21bdc?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                    className="object-contain shrink-0 rounded-none aspect-square w-12 h-12"
                    alt="Social login option 1"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/109bce7b98ceedf088172327f51163f33913bcba545dda949ec7fdb15c2f0401?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                    className="object-contain shrink-0 rounded-none aspect-square w-12 h-12"
                    alt="Social login option 2"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af4750c12f378114fa91cef77e88e3e3aed86d2f9b000113159de62489ce0644?placeholderIfAbsent=true&apiKey=4f9147a08e6749d1ab75f2ad160393ea"
                    className="object-contain shrink-0  aspect-square w-12 h-12"
                    alt="Social login option 3"
                />
            </div>
            <p className="self-center mt-5 text-lg leading-snug text-center text-white">
                or
            </p>
        </>
    );
}
