import { useEffect, useState } from "react";

import RoomHeader from "../components/RoomManagement/RoomHeader";
import QuickStatsCard from "../components/RoomManagement/QuickStatsCard";
import BlockFilter from "../components/RoomManagement/BlockFilter";
import RoomOverview from "../components/RoomManagement/RoomOverview";

import { getRooms } from "../services/room.service";

const RoomAllocation = () => {

  const [rooms, setRooms] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data =
          await getRooms();

        setRooms(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-24">

      <RoomHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        <div className="space-y-5">
          <QuickStatsCard
            rooms={rooms}
          />

          <BlockFilter />
        </div>

        <div className="lg:col-span-3">
          <RoomOverview
            rooms={rooms}
          />
        </div>

      </div>
    </div>
  );
};

export default RoomAllocation;