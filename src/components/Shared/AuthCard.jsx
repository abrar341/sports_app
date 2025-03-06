// import PropTypes from 'prop-types';

// const AuthCard = ({ children }) => {
//     return (
//         <div className="relative bg-customGradient border-[1.5px] rounded-[20px]  h-auto lg:h-[70vh] w-[370px] p-3 lg:p-8   border-white/50 backdrop-blur-sm flex flex-col justify-center">
//             {children}
//         </div>
//     );
// };

// AuthCard.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default AuthCard;


import PropTypes from 'prop-types';

const AuthCard = ({ children }) => {
    return (
        <div className="relative w-[320px] bg-customGradient border-[1.5px]  rounded-[22px] border-white/40 backdrop-blur-lg shadow-[0_0_3px_rgba(255,255,255,0.2)] flex flex-col justify-center">
            {children}
        </div>

    );
};

AuthCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthCard;
