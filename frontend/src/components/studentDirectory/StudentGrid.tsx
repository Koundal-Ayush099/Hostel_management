import StudentCard from "./StudentCard";

const students = [
  {
    name: "Marcus Thorne",
    course: "Computer Science",
    year: "Year 2",
    room: "B-402",
    status: "Checked In",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Elena Rodriguez",
    course: "Architecture",
    year: "Year 4",
    room: "A-105",
    status: "Checked In",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Julian Voss",
    course: "Engineering",
    year: "Year 1",
    room: "C-201",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Sasha Grey",
    course: "Fine Arts",
    year: "Year 3",
    room: "B-309",
    status: "Checked In",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Liam O'Connell",
    course: "Business",
    year: "Year 2",
    room: "A-212",
    status: "Away",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128",
  },
  {
    name: "Maya Chen",
    course: "Medicine",
    year: "Year 5",
    room: "D-102",
    status: "Checked In",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    name: "David Kim",
    course: "Finance",
    year: "Year 3",
    room: "C-405",
    status: "Checked In",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Zara Phillips",
    course: "Literature",
    year: "Year 1",
    room: "A-110",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

const StudentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {students.map((student) => (
        <StudentCard
          key={student.name}
          {...student}
        />
      ))}
    </div>
  );
};

export default StudentGrid;