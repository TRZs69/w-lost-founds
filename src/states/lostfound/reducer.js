import { ActionType } from "./action";

function lostfoundReducer(lostfound = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LOSTFOUND:
      return action.payload.lostfound || lostfound;

    case ActionType.EDIT_LOSTFOUND:
      return lostfound.map((item) =>
        item.id === action.payload.lostfound.id
          ? action.payload.lostfound
          : item
      );

    default:
      return lostfound;
  }
}

function isAddLostFoundReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.ADD_LOSTFOUND:
      return action.payload.status;
    default:
      return status;
  }
}

function isDeleteLostFoundReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.DELETE_LOSTFOUND:
      return action.payload.status;
    default:
      return status;
  }
}

function isEditLostFoundReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.EDIT_LOSTFOUND:
      return action.payload.status;
    default:
      return status;
  }
}

function detailLostFoundReducer(lostfound = null, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_LOSTFOUND:
      return action.payload.lostfound;
    default:
      return lostfound;
  }
}

export {
  lostfoundReducer,
  isAddLostFoundReducer,
  isDeleteLostFoundReducer,
  isEditLostFoundReducer,
  detailLostFoundReducer,
};
