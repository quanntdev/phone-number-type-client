import * as t from "../constants/index";

const initState = {
  loading: false,
  error: null,
  dataPhoneList: null,
  dataCreatePhone: null,
  dataDeletePhone: null,
};

const phone = (state = initState, action: any) => {
  switch (action.type) {
    case t.LIST_PHONE:
      return {
        ...state,
        dataPhoneList: action.payload,
        loading: false,
        error: null,
      };
    case t.CREATE_PHONE:
      return {
        ...state,
        dataCreatePhone: action.payload,
        loading: false,
        error: null,
      };

    case t.CLEAR_DATA:
      return {
        ...state,
        [action.payload]: null,
        loading: false,
        error: null,
      };

      case t.DELETE_PHONE:
        return {
          ...state,
          dataDeletePhone: action.payload,
          loading: false,
          error: null,
        };
    case t.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default phone;
