import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { postedAt } from "../utils/tools";
import { FaClock, FaTrash } from "react-icons/fa6";

function LostFoundItem({ lostfound, onDeleteLostFound }) {
  let badgeStatus, badgeLabel;
  if (lostfound.is_finished) {
    badgeStatus = "badge bg-success text-white ms-3";
    badgeLabel = "Selesai";
  } else {
    badgeStatus = "badge bg-warning text-dark ms-3";
    badgeLabel = "Belum Selesai";
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-8 d-flex">
            <h5>
              <Link to={`/lostfounds/${lostfound.id}`} className="text-primary">
                {lostfound.title}
              </Link>
            </h5>

            <div>
              <span className={badgeStatus}>{badgeLabel}</span>
            </div>
          </div>

          <div className="col-4 text-end">
            <button
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-undef
                Swal.fire({
                  title: "Hapus LostFound",
                  text: `Apakah kamu yakin ingin menghapus lostfound: ${lostfound.title}?`,
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Ya, Tetap Hapus",
                  customClass: {
                    confirmButton: "btn btn-danger me-3 mb-4",
                    cancelButton: "btn btn-secondary mb-4",
                  },
                  buttonsStyling: false,
                }).then((result) => {
                  if (result.isConfirmed) {
                    onDeleteLostFound(lostfound.id);
                  }
                });
              }}
              className="btn btn-sm btn-outline-danger"
            >
              <FaTrash /> Hapus
            </button>
          </div>
          <div className="col-12">
            <div className="text-sm op-5">
              <FaClock />
              <span className="ps-2">{postedAt(lostfound.created_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const lostFoundItemShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  is_finished: PropTypes.number.isRequired,
  cover: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
};

LostFoundItem.propTypes = {
  lostfound: PropTypes.shape(lostFoundItemShape).isRequired,
  onDeleteLostFound: PropTypes.func.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { lostFoundItemShape };

export default LostFoundItem;
