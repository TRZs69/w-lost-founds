import PropTypes from "prop-types";
import { FaChartBar } from "react-icons/fa6";

function LostFoundStats({ stats, statsType }) {
  const {
    totalLost,
    totalFound,
    totalCompleted,
    totalIncomplete,
    totalItems,
    endDate,
  } = stats;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-8">
            <h5 className="mb-0">
              <FaChartBar className="me-2" />
              {statsType === "daily"
                ? "Daily Lost & Found Stats"
                : "Monthly Lost & Found Stats"}
            </h5>
            <p className="text-muted">
              Stats as of: {new Date(endDate).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Stats Information */}
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <span>Total Lost:</span>
              <span className="badge bg-danger">{totalLost}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total Found:</span>
              <span className="badge bg-info">{totalFound}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total Completed:</span>
              <span className="badge bg-success">{totalCompleted}</span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-between">
              <span>Total Incomplete:</span>
              <span className="badge bg-warning">{totalIncomplete}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total Items:</span>
              <span className="badge bg-primary">{totalItems}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LostFoundStats.propTypes = {
  stats: PropTypes.shape({
    totalLost: PropTypes.number.isRequired,
    totalFound: PropTypes.number.isRequired,
    totalCompleted: PropTypes.number.isRequired,
    totalIncomplete: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
  statsType: PropTypes.oneOf(["daily", "monthly"]).isRequired,
};

export default LostFoundStats;
