import {
  LayoutDashboard,
  Wrench,
  LogOut,
} from "lucide-react";

import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

const StudentLayout = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "role"
    );

    navigate("/login");
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/student",
    },

    {
      name: "Send Request",
      icon: Wrench,
      path: "/student/request",
    },
  ];

  return (

    <div className="min-h-screen flex bg-slate-100">

      {/* SIDEBAR */}
      <aside className="w-72 bg-slate-950 text-white flex flex-col">

        {/* LOGO */}
        <div className="h-20 flex items-center px-8 border-b border-slate-800">

          <h1 className="text-3xl font-bold">
            Ostello
          </h1>

        </div>

        {/* NAVIGATION */}
        <div className="flex-1 px-4 py-6 space-y-2">

          {navItems.map((item) => {

            const Icon =
              item.icon;

            const isActive =
              location.pathname ===
              item.path;

            return (

              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition font-medium ${
                  isActive
                    ? "bg-blue-700 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >

                <Icon size={22} />

                {item.name}

              </Link>
            );
          })}
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-slate-800">

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-300 hover:bg-red-600 hover:text-white transition font-medium"
          >

            <LogOut size={22} />

            Logout

          </button>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">

        <Outlet />

      </main>
    </div>
  );
};

export default StudentLayout;