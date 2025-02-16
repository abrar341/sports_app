import PropTypes from 'prop-types';

const AuthCard = ({ children }) => {
    return (
        <div className="relative bg-customGradient border-[1.5px] rounded-[20px] mx-auto h-auto lg:h-[70vh] w-[370px] p-3 lg:p-8   border-white/50 backdrop-blur-sm flex flex-col justify-center">
            {children}
        </div>
    );
};

AuthCard.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthCard;
