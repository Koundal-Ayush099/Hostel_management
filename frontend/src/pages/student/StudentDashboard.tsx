import {
  BedDouble,
  Wrench,
  CheckCircle2,
  Clock3,
  Send,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

const StudentDashboard = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      ) || "{}"
    );

  return (

    <div className="space-y-8">

      {/* HEADER */}
      <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <p className="text-blue-700 font-semibold">
            STUDENT PORTAL
          </p>

          <h1 className="text-4xl font-bold text-slate-800 mt-2">
            Welcome back,
            {" "}
            {user.name || "Student"} 👋
          </h1>

          <p className="text-slate-500 mt-3">
            Manage your hostel activities and maintenance requests here.
          </p>

        </div>

        <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center">

          <User
            size={42}
            className="text-blue-700"
          />

        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">
                Room Number
              </p>

              <h2 className="text-3xl font-bold mt-2">
                B-101
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

              <BedDouble className="text-blue-700" />

            </div>

          </div>

        </div>

        {/* TOTAL REQUESTS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">
                Total Requests
              </p>

              <h2 className="text-3xl font-bold mt-2">
                12
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

              <Wrench className="text-orange-600" />

            </div>

          </div>

        </div>

        {/* OPEN REQUESTS */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">
                Open Requests
              </p>

              <h2 className="text-3xl font-bold mt-2">
                4
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">

              <Clock3 className="text-red-600" />

            </div>

          </div>

        </div>

        {/* RESOLVED */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">
                Resolved
              </p>

              <h2 className="text-3xl font-bold mt-2">
                8
              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

              <CheckCircle2 className="text-green-600" />

            </div>

          </div>

        </div>

      </div>

      {/* QUICK ACTION */}
      <div className="bg-linear-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 text-white shadow-sm">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <h2 className="text-3xl font-bold">
              Need Help?
            </h2>

            <p className="text-blue-100 mt-3">
              Quickly report maintenance issues directly to hostel administration.
            </p>

          </div>

          <Link
            to="/student/request"
            className="bg-white text-blue-700 hover:bg-slate-100 transition px-6 py-4 rounded-2xl font-semibold flex items-center gap-3 w-fit"
          >

            <Send size={20} />

            Send Request

          </Link>

        </div>

      </div>

      {/* RECENT REQUESTS */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

        <div className="p-6 border-b border-slate-100">

          <h2 className="text-2xl font-bold text-slate-800">
            Recent Requests
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr className="text-left text-sm text-slate-500">

                <th className="p-5">
                  ISSUE
                </th>

                <th className="p-5">
                  TYPE
                </th>

                <th className="p-5">
                  STATUS
                </th>

                <th className="p-5">
                  DATE
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t border-slate-100">

                <td className="p-5 font-medium">
                  AC Not Cooling
                </td>

                <td className="p-5">
                  Electrical
                </td>

                <td className="p-5">

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                    IN PROGRESS
                  </span>

                </td>

                <td className="p-5 text-slate-500">
                  Today
                </td>

              </tr>

              <tr className="border-t border-slate-100">

                <td className="p-5 font-medium">
                  Water Leakage
                </td>

                <td className="p-5">
                  Plumbing
                </td>

                <td className="p-5">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    RESOLVED
                  </span>

                </td>

                <td className="p-5 text-slate-500">
                  Yesterday
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;