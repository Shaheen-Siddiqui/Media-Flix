import { YouthclubVideoList } from "../../../database/videoData";
import { videoCategoryList } from "../../../database/categoryData";
import { videoConstant } from "./video-constants";

const initialState = {
  ycVideoCase: YouthclubVideoList,
  ycCategoryCase: videoCategoryList,
  watchlaterCase: [],
  search: "",
  selectedCategory: {},
};

const { SEARCH, WATCHLATER_ITEMS, SELECTED_CATEGORY, LIKED_VIDEO } =
  videoConstant;

export const VideoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    case WATCHLATER_ITEMS:
      const isInsideWatchLater =
        state.watchlaterCase.find((item) => item._id == payload?._id) ==
        undefined
          ? [...state.watchlaterCase, payload]
          : state.watchlaterCase.filter((item) => item._id != payload._id);

      return {
        ...state,
        watchlaterCase: isInsideWatchLater,
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      };

    case LIKED_VIDEO:
      // const islike=state.ycVideoCase.map((item) =>
      // item._id == payload)

      // console.log(islike);
      return {
        ...state,
        ycVideoCase: state.ycVideoCase.map((item) =>
          item._id == payload
            ? { ...item, liked: !item.liked }
            : { ...item, liked: false }
        ),
      };

    default:
      return state;
  }
};
