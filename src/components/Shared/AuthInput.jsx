import PropTypes from 'prop-types';

const AuthInput = ({ type, placeholder, value, label, onChange }) => {
    return (
        <div className=' w-full'>
            <p className='text-white text-sm mb-[6px] px-1 w-full '>{label}</p>

            <div className="w-full  relative">
                <div className="absolute  inset-0 rounded-[15px] p-[1px] bg-transparent"
                    style={{
                        background: "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
                        mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                        maskComposite: "exclude",
                        WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                        WebkitMaskComposite: "xor"
                    }}
                />
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-2 rounded-[15px] text-white bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-gray-300 
        shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] relative placeholder:text-sm  placeholder:text-white/50"
                />
            </div>
        </div>
    );
};

AuthInput.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default AuthInput;
