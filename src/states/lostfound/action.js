import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { showErrorDialog } from "../../utils/tools";

const ActionType = {
  GET_LOSTFOUND: "GET_LOSTFOUND",
  ADD_LOSTFOUND: "ADD_LOSTFOUND",
  DELETE_LOSTFOUND: "DELETE_LOSTFOUND",
  DETAIL_LOSTFOUND: "DETAIL_LOSTFOUND",
  EDIT_LOSTFOUND: "EDIT_LOSTFOUND",
};

function getLostFoundActionCreator(lostfound) {
  return {
    type: ActionType.GET_LOSTFOUND,
    payload: {
      lostfound,
    },
  };
}

function addLostFoundActionCreator(status) {
  return {
    type: ActionType.ADD_LOSTFOUND,
    payload: {
      status,
    },
  };
}

function deleteLostFoundActionCreator(status) {
  return {
    type: ActionType.DELETE_LOSTFOUND,
    payload: {
      status,
    },
  };
}

function editLostFoundActionCreator(lostfound) {
  return {
    type: ActionType.EDIT_LOSTFOUND,
    payload: {
      lostfound,
    },
  };
}

function detailLostFoundActionCreator(lostfound) {
  return {
    type: ActionType.DETAIL_LOSTFOUND,
    payload: {
      lostfound,
    },
  };
}

function changeCoverLostFoundActionCreator(lostfound) {
  return {
    type: ActionType.DETAIL_LOSTFOUND,
    payload: {
      lostfound,
    },
  };
}

function asyncChangeCoverLostFound({ id, cover }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const updatedLostFound = await api.postChangeCoverLostFound({
        id,
        cover,
      });
      dispatch(changeCoverLostFoundActionCreator(updatedLostFound));
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncGetLostFound(is_completed) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const lostfound = await api.getAllLostFound(is_completed);
      dispatch(getLostFoundActionCreator(lostfound));
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddLostFound({ title, description, status }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const newLostFound = await api.postAddLostFound({
        title,
        description,
        status,
      });
      dispatch({
        type: ActionType.ADD_LOSTFOUND,
        payload: { status: true, lostfound: newLostFound },
      });
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDeleteLostFound(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.deleteLostFound(id);
      dispatch(deleteLostFoundActionCreator(true));
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncEditLostFound(id, title, description, status, is_completed) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.putUpdateLostFound({
        id,
        title,
        description,
        status,
        is_completed,
      });

      const updatedLostFound = await api.getDetailLostFound(id);

      dispatch(detailLostFoundActionCreator(updatedLostFound));
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDetailLostFound(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const lostfound = await api.getDetailLostFound(id);
      dispatch(detailLostFoundActionCreator(lostfound));
    } catch (error) {
      showErrorDialog(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  getLostFoundActionCreator,
  asyncGetLostFound,
  addLostFoundActionCreator,
  asyncAddLostFound,
  deleteLostFoundActionCreator,
  asyncDeleteLostFound,
  editLostFoundActionCreator,
  asyncEditLostFound,
  detailLostFoundActionCreator,
  asyncDetailLostFound,
  changeCoverLostFoundActionCreator,
  asyncChangeCoverLostFound,
};
