const MaintenanceHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold">
          Requests
        </h1>

        <p className="text-gray-500 mt-1">
          Manage and track facility maintenance tasks
        </p>
      </div>
    </div>
  );
};

export default MaintenanceHeader;