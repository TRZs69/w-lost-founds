import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LostFoundList from "../components/LostFoundList";
import {
  asyncGetLostFound,
  asyncDeleteLostFound,
  deleteLostFoundActionCreator,
} from "../states/lostfound/action";

function HomePage() {
  const { lostfound = [], isDeleteLostFound = false } = useSelector(
    (states) => states
  );

  const queryParams = new URLSearchParams(location.search);
  const is_finished = queryParams.get("is_finished") || "";

  const dispatch = useDispatch();

  useEffect(() => {
    if (isDeleteLostFound) {
      // eslint-disable-next-line no-undef
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "LostFound berhasil dihapus!",
        showConfirmButton: false,
        timer: 700,
      });
      dispatch(deleteLostFoundActionCreator(false));
    }
    dispatch(asyncGetLostFound(is_finished));
  }, [dispatch, isDeleteLostFound, is_finished]);

  const onDeleteLostFound = (id) => {
    dispatch(asyncDeleteLostFound(id));
  };

  return (
    <section>
      <div className="container pt-1">
        <LostFoundList
          lostfound={lostfound}
          onDeleteLostFound={onDeleteLostFound}
        ></LostFoundList>
      </div>
    </section>
  );
}

export default HomePage;
