import { Bell, Search } from "lucide-react";
import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <div className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between sticky top-0">
      <div className="flex items-center gap-3">
        <img src={Logo} className="w-40 h-30"/>
      </div>

      <div className="flex items-center gap-10">
        <button className="text-gray-600 hover:text-blue-600 transition hover:cursor-pointer">
          <Search size={20} />
        </button>

        <button className="text-gray-600 hover:text-blue-600 transition relative hover:cursor-pointer">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-600"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;