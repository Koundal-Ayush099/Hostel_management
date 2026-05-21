import { useState, useEffect } from "react";

import { X } from "lucide-react";

import { createStudent } from "../../services/student.service";
import { getAvailableRooms } from "../../services/room.service";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddStudentModal = ({ isOpen, onClose }: Props) => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "MALE",
    dob: "",
    course: "",
    year: 1,
    status: "CHECKED_IN",
    profileImage: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    roomId: null as number | null,
  });
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAvailableRooms();

        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    let finalValue: any = value;

    if (name === "roomId") {
      finalValue = value === "" ? null : parseInt(value);
    }

    if (name === "year") {
      finalValue = parseInt(value);
    }

    setFormData({
      ...formData,

      [name]: finalValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createStudent({
        ...formData,

        year: Number(formData.year),

        roomId: formData.roomId ? Number(formData.roomId) : null,
      });

      alert("Student Added Successfully");

      onClose();
    } catch (error) {
      console.log(error);

      alert("Failed To Add Student");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto shadow-xl">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
        >
          <X size={24} />
        </button>

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Add Student</h2>

          <p className="text-gray-500 mt-2">
            Fill in the student details below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* FULL NAME */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* GENDER */}
          <select
            name="gender"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
          >
            <option value="MALE">Male</option>

            <option value="FEMALE">Female</option>

            <option value="OTHER">Other</option>
          </select>

          {/* DOB */}
          <input
            type="date"
            name="dob"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* COURSE */}
          <input
            type="text"
            name="course"
            placeholder="Course"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* YEAR */}
          <input
            type="number"
            name="year"
            placeholder="Year"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* STATUS */}
          <select
            name="status"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
          >
            <option value="CHECKED_IN">Checked In</option>

            <option value="PENDING">Pending</option>

            <option value="AWAY">Away</option>
          </select>

          {/* IMAGE UPLOAD */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  const imageUrl = URL.createObjectURL(file);

                  setFormData({
                    ...formData,
                    profileImage: imageUrl,
                  });
                }
              }}
              className="w-full border border-gray-200 rounded-xl p-3"
            />

            {formData.profileImage && (
              <img
                src={formData.profileImage}
                alt="Preview"
                className="w-28 h-28 rounded-2xl object-cover mt-4 border"
              />
            )}
          </div>

          {/* EMERGENCY CONTACT NAME */}
          <input
            type="text"
            name="emergencyContactName"
            placeholder="Emergency Contact Name"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* EMERGENCY CONTACT PHONE */}
          <input
            type="text"
            name="emergencyContactPhone"
            placeholder="Emergency Contact Phone"
            className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500"
            onChange={handleChange}
            required
          />

          {/* ROOM ID */}
          {/* ROOM SELECT */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assign Room
            </label>

            <select
              name="roomId"
              className="border border-gray-200 rounded-xl h-12 px-4 outline-none focus:border-blue-500 w-full"
              onChange={handleChange}
            >
              <option value="">Select Room</option>

              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.room_number} ({room.status})
                </option>
              ))}
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl md:col-span-2 transition font-medium"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
