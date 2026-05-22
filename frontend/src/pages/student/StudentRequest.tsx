import { useState } from "react";

import {
  Wrench,
  Send,
} from "lucide-react";

import axios from "axios";

const StudentRequest = () => {

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

      issueType: "PLUMBING",

      priority: "LOW",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
  async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          ) || "{}"
        );

      await axios.post(
        "http://localhost:5000/api/maintenance",

        {
          title:
            formData.title,

          description:
            formData.description,

          issueType:
            formData.issueType,

          priority:
            formData.priority,

          status: "OPEN",

          reportedBy:
            user.name,

          assignedTo:
            "Not Assigned",

          roomId: 1,
        },

        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Request Sent Successfully"
      );

      setFormData({

        title: "",

        description: "",

        issueType:
          "PLUMBING",

        priority:
          "LOW",
      });

    } catch (error) {

      console.log(error);

      alert(
        "Failed To Send Request"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="max-w-3xl mx-auto">

      <div className="bg-white rounded-3xl shadow-sm p-8">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">

          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

            <Wrench className="text-blue-700" />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Send Request
            </h1>

            <p className="text-slate-500 mt-1">
              Report hostel maintenance issues here.
            </p>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* TITLE */}
          <div>

            <label className="block text-sm font-medium text-slate-600 mb-2">
              Request Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter issue title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl h-14 px-4 outline-none focus:border-blue-600"
              required
            />

          </div>

          {/* ISSUE TYPE */}
          <div>

            <label className="block text-sm font-medium text-slate-600 mb-2">
              Issue Type
            </label>

            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl h-14 px-4 outline-none focus:border-blue-600"
            >

              <option value="PLUMBING">
                Plumbing
              </option>

              <option value="ELECTRICAL">
                Electrical
              </option>

              <option value="CARPENTRY">
                Carpentry
              </option>

              <option value="OTHER">
                Other
              </option>

            </select>

          </div>

          {/* PRIORITY */}
          <div>

            <label className="block text-sm font-medium text-slate-600 mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl h-14 px-4 outline-none focus:border-blue-600"
            >

              <option value="LOW">
                Low
              </option>

              <option value="MEDIUM">
                Medium
              </option>

              <option value="HIGH">
                High
              </option>

              <option value="EMERGENCY">
                Emergency
              </option>

            </select>

          </div>

          {/* DESCRIPTION */}
          <div>

            <label className="block text-sm font-medium text-slate-600 mb-2">
              Description
            </label>

            <textarea
              name="description"
              placeholder="Describe the issue..."
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none focus:border-blue-600 resize-none"
              required
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold flex items-center justify-center gap-2"
          >

            {loading
              ? "Sending..."
              : "Send Request"}

            {!loading && (
              <Send size={18} />
            )}

          </button>

        </form>
      </div>
    </div>
  );
};

export default StudentRequest;