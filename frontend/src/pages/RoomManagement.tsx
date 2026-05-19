import RoomHeader from "../components/RoomManagement/RoomHeader";
import QuickStatsCard from "../components/RoomManagement/QuickStatsCard";
import BlockFilter from "../components/RoomManagement/BlockFilter";
import RoomOverview from "../components/RoomManagement/RoomOverview";

const RoomAllocation = () => {
  return (
    <div className="space-y-5 pb-24">
      <RoomHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="space-y-5">
          <QuickStatsCard />

          <BlockFilter />
        </div>

        <div className="lg:col-span-3">
          <RoomOverview />
        </div>
      </div>
    </div>
  );
};

export default RoomAllocation;