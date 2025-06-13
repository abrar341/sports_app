import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ChangePasswordModal from "../ChagePasswordModal/ChangePasswordModal";
import SettingCard from "../Shared/SettingCard";
import { FaBell, FaQuestionCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountSection = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className=" mx-auto">
      <h2 className="text-lg font-bold mb-4 text-left">Account</h2>
      <div className="space-y-4">
        <EditProfileModal />
        {!userInfo?.data?.googleId && <ChangePasswordModal />}
        {/* <SettingCard icon={<FaBell />} title="Notification" iconColor="blue-400" /> */}
        <SettingCard
          onClick={() => {
            navigate("/contact");
          }}
          icon={<FaQuestionCircle />}
          title="Contact Support"
          iconColor="pink-400"
        />
      </div>
    </div>
  );
};

export default AccountSection;
