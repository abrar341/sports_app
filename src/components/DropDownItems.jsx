import { Settings, Star, User, LogOut, UserCog, Shield } from "lucide-react";

const DropDownItems = [
  {
    label: "Account Settings",
    href: "/dashboard/account-setting",
    icon: UserCog,
  },
  {
    label: "Favorites Players",
    href: "/dashboard/player-team-favorites",
    icon: Star,
  },
  {
    label: "Favorites Teams",
    href: "/dashboard/player-team-favorites",
    icon: Shield,
  },
  // {
  //   label: "Profile",
  //   href: "/dashboard/setting",
  //   icon: User,
  // },
  {
    label: "Settings",
    href: "/dashboard/setting",
    icon: Settings,
  },
  {
    label: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];

export default DropDownItems;
