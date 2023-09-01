import { authConstants } from "./auth-constants";

const { SAVE_USER_INPUT_DETAILS, CLEAR_INPUT_FIELD } = authConstants;

const initialState = {
  userInputDetails: {
    name: "",
    email: "",
    lastname: "",
    password: "",
    confirmpassword: "",
  },
  isLogIn: null,
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

    case "USER_LOGIN":
      return {
        ...state,
        isLogIn: payload,
      };
    // case CLEAR_INPUT_FIELD:
    //   return {
    //     ...state,
    //     userInputDetails: {
    //       name: "",
    //       email: "",
    //       lastname: "",
    //       password: "",
    //       confirmpassword: "",
    //     },
    //   };

    default:
      return state;
  }
};
