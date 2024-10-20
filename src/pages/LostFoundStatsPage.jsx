import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncGetStatsDaily,
  asyncGetStatsMonthly,
} from "../states/lostfound/action";
import LostFoundStats from "../components/LostFoundStats";

function LostFoundStatsPage() {
  const { type } = useParams(); // 'type' will determine if it's daily or monthly
  const { statsDaily, statsMonthly } = useSelector((state) => ({
    statsDaily: state.statsDaily,
    statsMonthly: state.statsMonthly,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Type parameter:", type); // Check if 'type' is coming through correctly
    if (type === "daily") {
      console.log("Dispatching asyncGetStatsDaily...", dispatch); // Log dispatch
      dispatch(asyncGetStatsDaily("2024-10-05 22:00:00", 10)); // Fetch daily stats
    } else if (type === "monthly") {
      console.log("Dispatching asyncGetStatsMonthly...", dispatch); // Log dispatch
      dispatch(asyncGetStatsMonthly("2024-10-05 22:00:00", 5)); // Fetch monthly stats
    }
  }, [type, dispatch]);

  // Choose the stats to display based on the 'type' parameter
  const stats = type === "daily" ? statsDaily : statsMonthly;

  useEffect(() => {
    console.log("Stats data:", stats); // Log the stats to see if they are being updated
  }, [stats]);

  return (
    <section>
      <div className="container pt-1">
        {stats ? (
          <LostFoundStats stats={stats} statsType={type} />
        ) : (
          <p>Loading stats...</p>
        )}
      </div>
    </section>
  );
}

export default LostFoundStatsPage;
