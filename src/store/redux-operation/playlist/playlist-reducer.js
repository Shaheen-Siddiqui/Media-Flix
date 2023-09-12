import { playlistConstant } from "./playlist-constant";
import { v4 as uuid } from "uuid";

const initialState = {
  listContainer: {
    _id: "",
    listName: "",
    listCase: [],
  },
  playlistCase: [
    {
      _id: "123",
      listName: "Session",
      listCase: [
        {
          _id: "123456",
          category: "Tahajjud prayer",
          creator: "Tuaha ibn Jalil | Abu Saad | Ali.E",
          liked: false,
          src: "https://youtu.be/YbswnVCO46w?si=h2Ykp0ZryPiINwEM",
          thumbnail:
            "https://i.ytimg.com/vi/YbswnVCO46w/maxresdefault.jpg",
          title: "Tips For Waking up in Tahajjud ",
          videoThumbnail:
            "https://i.ytimg.com/vi/YbswnVCO46w/maxresdefault.jpg",
          views: "76k",
        },
      ],
    },
  ],
};

const {
  ADD_CONTAINER,
  CREATE_NEW_PLAYLIST,
  TOGGLE_CHECKBOX,
  SHOW_CHECKED,
  DELETE_PLAYLIST_CASE,
  DELETE_PLAYLIST,
} = playlistConstant;

export const PlaylistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTAINER:
      return {
        ...state,
        listContainer: {
          ...state.listContainer,
          listName: payload,
        },
      };

    case CREATE_NEW_PLAYLIST:
      return {
        ...state,
        playlistCase: [
          ...state.playlistCase,
          {
            ...state.listContainer,
            _id: uuid(),
          },
        ],
        listContainer: { ...state.listContainer, listName: "" },
      };

    case TOGGLE_CHECKBOX:
      const { toggleId, ItemToAdd } = payload;
      return {
        ...state,
        playlistCase: state.playlistCase.map((item) =>
          toggleId == item._id
            ? {
                ...item,
                listCase: [...item.listCase, ItemToAdd],
              }
            : item
        ),
      };

    case DELETE_PLAYLIST:
      return {
        ...state,
        playlistCase: state.playlistCase.map((item) =>
          item._id == payload._id
            ? {
                ...item,
                listCase: item.listCase.filter(
                  (removeItem) => removeItem._id !== payload.listedItemId
                ),
              }
            : item
        ),
      };

    case DELETE_PLAYLIST_CASE:
      return {
        ...state,
        playlistCase: state.playlistCase.filter(
          (removeID) => removeID._id !== payload
        ),
      };

    default:
      return state;
  }
};
