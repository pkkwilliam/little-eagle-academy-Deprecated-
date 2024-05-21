import { store } from "../redux/store";

export const getErrorMessage = ({ errorCode, message }) => {
  const currentState = store.getState();
  const error = currentState?.language?.languageLabel?.error ?? {};
  if (error[errorCode]) {
    return error[errorCode];
  }
  return message;
};
