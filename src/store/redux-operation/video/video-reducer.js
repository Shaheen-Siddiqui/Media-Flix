import { YouthclubVideoList } from "../../../database/videoData";
import { videoCategoryList } from "../../../database/categoryData";
import { videoConstant } from "./video-constants";

const initialState = {
  ycVideoCase: YouthclubVideoList,
  ycCategoryCase: videoCategoryList,
  watchlaterCase: [],
  search: "",
};

const { SEARCH, WATCHLATER_ITEMS } = videoConstant;

export const VideoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    case WATCHLATER_ITEMS:
      const isInsideWatchLater =
        state.watchlaterCase.find((item) => item._id == payload._id) ==
        undefined
          ? [...state.watchlaterCase, payload]
          : state.watchlaterCase.filter((item) => item._id != payload._id);

      return {
        ...state,
        watchlaterCase: isInsideWatchLater,
      };
    default:
      return state;
  }
};
