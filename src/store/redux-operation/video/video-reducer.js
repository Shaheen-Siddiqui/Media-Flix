import { YouthclubVideoList } from "../../../database/videoData";
import { videoCategoryList } from "../../../database/categoryData";
import { videoConstant } from "./video-constants";
import { toast } from "react-hot-toast";

const initialState = {
  ycVideoCase: YouthclubVideoList,
  ycCategoryCase: videoCategoryList,
  watchlaterCase: [],
  search: "",
  selectedCategory: { comments: [] },
  commentText: "",
};

const {
  SEARCH,
  WATCHLATER_ITEMS,
  SELECTED_CATEGORY,
  LIKED_VIDEO,
  SET_COMMENTED_TEXT,
  GET_COMMENTED_TEXT,
  DELETE_NOTE,
  GET_EDIT_COMMENT,
  EDIT,
  EMPTY_CMMENT_SPACE,
} = videoConstant;

export const VideoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH:
      return {
        ...state,
        search: payload,
      };
    case WATCHLATER_ITEMS:
      let isInsideWatchLater = state.watchlaterCase.find(
        (item) => item._id == payload?._id
      );

      if (isInsideWatchLater == undefined) {
        isInsideWatchLater = [...state.watchlaterCase, payload];
        toast.success("added into watchlater");
      } else {
        isInsideWatchLater = state.watchlaterCase.filter(
          (item) => item._id != payload._id
        );
        toast.success("Removed from watchlater");
      }
      // undefined
      //   ? [...state.watchlaterCase, payload]

      return {
        ...state,
        watchlaterCase: isInsideWatchLater,
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: { ...state.selectedCategory, ...payload },
      };

    case LIKED_VIDEO:
      return {
        ...state,
        ycVideoCase: state.ycVideoCase.map((item) =>
          item._id == payload
            ? { ...item, liked: !item.liked }
            : { ...item, liked: false }
        ),
      };
    case SET_COMMENTED_TEXT:
      return {
        ...state,
        commentText: payload,
      };
    case GET_COMMENTED_TEXT:
      return {
        ...state,
        ycVideoCase: state.ycVideoCase.map((dbVideo) =>
          dbVideo._id == payload._id
            ? { ...dbVideo, comments: [...dbVideo.comments, state.commentText] }
            : dbVideo
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        ycVideoCase: state.ycVideoCase.map((video) =>
          video._id == payload.selectedVideo._id
            ? {
                ...video,
                comments: video.comments.filter(
                  (_, videoIndex) => videoIndex !== payload.textIndex
                ),
              }
            : video
        ),
      };

    case GET_EDIT_COMMENT:
      return {
        ...state,
        commentText: payload,
      };
    case EDIT:
      const { editCommentId, commentText, selectedVideo } = payload;
      return {
        ...state,
        ycVideoCase: state.ycVideoCase.map((video) =>
          video._id == selectedVideo._id
            ? {
                ...video,
                comments: video.comments.map((item, itemIndex) =>
                  itemIndex == editCommentId ? commentText : item
                ),
              }
            : video
        ),
      };
    case EMPTY_CMMENT_SPACE:
      return {
        ...state,
        commentText: "",
      };

    default:
      return state;
  }
};
