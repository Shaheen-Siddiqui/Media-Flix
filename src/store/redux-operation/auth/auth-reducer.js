import { authConstants } from "./auth-constants";

const { SAVE_USER_INPUT_DETAILS, CLEAR_INPUT_FIELD, USER_LOGIN, SIGN_OUT } =
  authConstants;

const initialState = {
  
  isLogIn: null,

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
      const { name, value } = payload;
      return {
        ...state,
        userInputDetails: {
          ...state.userInputDetails,
          [name]: value,
        },
      };

    case USER_LOGIN:
      return {
        ...state,
        isLogIn: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLogIn: null,
      };
    case CLEAR_INPUT_FIELD:
      return {
        ...state,
        userInputDetails: {
          name: "",
          email: "",
          lastname: "",
          password: "",
          confirmpassword: "",
        },
      };

    default:
      return state;
  }
};
