import React, { useState } from "react";
import DropDown from "../DropDown";
import { useDispatch, useSelector } from "react-redux";
import dropdownItems from "../DropDownItems";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../slices/authSlice";

const ProfileIcon = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  const handleItemClick = (item) => {
    setDropdownVisible(false);
    setMenuOpen(false);
    if (item.label === "Logout") {
      dispatch(logoutUser()); // Dispatch logout action
    } else if (item.href) {
      navigate(item.href);
    }
  };
  return (
    <div className="">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <img
          src={
            userInfo?.data?.profilePictureURL || "/assets/accountsetting.jpg"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
          loading="lazy"
        />
      </div>
      <DropDown
        items={dropdownItems}
        onItemClick={handleItemClick}
        isOpen={dropdownVisible}
        onClose={() => setDropdownVisible(false)}
      />
    </div>
  );
};

export default ProfileIcon;
