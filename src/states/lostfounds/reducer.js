import { ActionType } from "./action";

function lostfoundsReducer(lostfounds = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_LOSTFOUNDS:
      return action.payload.lostfounds;

    case ActionType.EDIT_LOSTFOUND:
      return lostfounds.map((lostfound) =>
        lostfound.id === action.payload.lostfound.id
          ? action.payload.lostfound
          : lostfound
      );

    default:
      return lostfounds;
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
function statsReducer(stats = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_DAILY_STATS:
    case ActionType.GET_MONTHLY_STATS:
      return action.payload.stats;
    default:
      return stats;
  }
}

export {
  lostfoundsReducer,
  isAddLostFoundReducer,
  isDeleteLostFoundReducer,
  isEditLostFoundReducer,
  detailLostFoundReducer,
  statsReducer,
};
