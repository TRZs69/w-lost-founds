import PropTypes from "prop-types";
import LostFoundItem, { lostFoundItemShape } from "./LostFoundItem";

function LostFoundList({ lostfound, onDeleteLostFound }) {
  return (
    <div>
      {lostfound.map((lostfound) => (
        <LostFoundItem
          key={lostfound.id}
          lostfound={lostfound}
          onDeleteLostFound={onDeleteLostFound}
        />
      ))}
    </div>
  );
}

LostFoundList.propTypes = {
  lostfound: PropTypes.arrayOf(PropTypes.shape(lostFoundItemShape)).isRequired,
  onDeleteLostFound: PropTypes.func.isRequired,
};

export default LostFoundList;
