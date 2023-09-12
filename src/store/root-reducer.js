import { combineReducers } from "redux";
import { AuthReducer } from "./redux-operation/auth/auth-reducer";
import { VideoReducer } from "./redux-operation/video/video-reducer";
import { PlaylistReducer } from "./redux-operation/playlist/playlist-reducer";

export const RootReducer = combineReducers({
  auth: AuthReducer,
  video:VideoReducer,
  playlist:PlaylistReducer
});
