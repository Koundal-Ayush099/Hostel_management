import { useEffect, useState } from "react";

import StudentHeader from "../components/studentDirectory/StudentHeader";
import StudentFilters from "../components/studentDirectory/StudentFilters";
import StudentGrid from "../components/studentDirectory/StudentGrid";

import { getStudents } from "../services/student.service";

const StudentDirectory = () => {

  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStudents =
      async () => {
        try {
          const data =
            await getStudents();

          setStudents(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-24">

      <StudentHeader />

      <StudentFilters />

      <StudentGrid
        students={students}
      />

    </div>
  );
};

export default StudentDirectory;