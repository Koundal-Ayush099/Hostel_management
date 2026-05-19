import StudentHeader from "../components/studentDirectory/StudentHeader";
import StudentFilters from "../components/studentDirectory/StudentFilters";
import StudentGrid from "../components/studentDirectory/StudentGrid";

const StudentDirectory = () => {
  return (
    <div className="space-y-6 pb-24">
      <StudentHeader />

      <StudentFilters />

      <StudentGrid />
    </div>
  );
};

export default StudentDirectory;