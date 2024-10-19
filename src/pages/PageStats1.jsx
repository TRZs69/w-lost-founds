import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetDailyStats,
  asyncGetMonthlyStats,
} from "../states/lostFound/action";
import PageStatsComponent from "../components/PageStats";

function PageStats() {
  const [viewMode, setViewMode] = useState("daily");
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  useEffect(() => {
    if (viewMode === "daily") {
      dispatch(asyncGetDailyStats());
    } else {
      dispatch(asyncGetMonthlyStats());
    }
  }, [viewMode, dispatch]);

  return (
    <div>
      <h1>Lost and Found Stats</h1>
      <label htmlFor="viewMode">View Stats By: </label>
      <select
        id="viewMode"
        value={viewMode}
        onChange={(e) => setViewMode(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>

      <PageStatsComponent
        stats={stats}
        viewMode={viewMode}
      />
    </div>
  );
}

export default PageStats;
