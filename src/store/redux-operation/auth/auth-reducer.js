import { authConstants } from "./auth-constants";

const { SAVE_USER_INPUT_DETAILS } = authConstants;

const initialState = {
  userInputDetails: {
    name: "",
    email: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  },
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_USER_INPUT_DETAILS:
     const {name, value}=payload;
      return {
        ...state,
        userInputDetails: {
          ...state.userInputDetails,
          [name]: value,
        },
      };
    default:
      return state;
  }
};
