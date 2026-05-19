import {
  LayoutDashboard,
  BedDouble,
  Users,
  Wrench,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import clsx from "clsx";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Rooms",
    path: "/rooms",
    icon: BedDouble,
  },
  {
    label: "Students",
    path: "/students",
    icon: Users,
  },
  {
    label: "Requests",
    path: "/requests",
    icon: Wrench,
  },
];

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 flex items-center justify-around px-4 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all",
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:text-blue-600"
              )
            }
          >
            <Icon size={20} />

            <span className="text-xs font-medium">
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default BottomNavbar;