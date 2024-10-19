import React from "react";
import LostFoundItem from "./LostFoundItem"; // Import LostFoundItem component

function PageStatsComponent({ stats, viewMode }) {
  return (
    <div>
      <h2>{viewMode === "daily" ? "Daily Stats" : "Monthly Stats"}</h2>
      <ul>
        {stats.map((item) => (
          <LostFoundItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PageStatsComponent;
