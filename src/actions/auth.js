import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";
import { notifySignup } from "./toastNotifications";
export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: "New account created", color: "info" }));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    return error;
  }
};
