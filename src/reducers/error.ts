export enum ErrorActions {
  Error = "Error",
}

export enum ErrorKeys {
  Search = "SEARCH",
}

export interface ErrorStore {
  isError: true | false;
  key: string;
  errorMessage: string;
}

export interface ErrorAction {
  type: ErrorActions.Error;
  payload: ErrorStore;
}

const initialState: ErrorStore = {
  isError: false,
  errorMessage: "",
  key: "",
};

function errorReducer(state = initialState, action: ErrorAction) {
  switch (action.type) {
    case ErrorActions.Error:
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
        key: action.payload.key,
      };
    default:
      return state;
  }
}

export default errorReducer;
