import StudentCard from "./StudentCard";

type Student = {
  id: number;
  full_name: string;
  course: string;
  year: number;
  room_number?: string | null;
  status: string;
  profile_image?: string;
};

type Props = {
  students: Student[];
};

const StudentGrid = ({
  students,
}: Props) => {

  const formatStatus = (
    status: string
  ) => {
    return status
      .replace("_", " ")
      .toLowerCase()
      .replace(
        /\b\w/g,
        (char) =>
          char.toUpperCase()
      );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {students.map((student) => (

        <StudentCard
          key={student.id}

          name={student.full_name}

          course={student.course}

          year={`Year ${student.year}`}

          room={
            student.room_number ||
            "Not Assigned"
          }

          status={formatStatus(
            student.status
          )}

          image={
            student.profile_image ||
            "none"
          }
        />

      ))}

    </div>
  );
};

export default StudentGrid;