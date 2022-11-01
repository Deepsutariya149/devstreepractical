import { userActions } from "../slices";
import { apiErrorBlock } from "../../utils/functios";

export const onUserLogin = (user) => async (dispatch) => {
  try {
    await dispatch(userActions.updateUser({ user }));
  } catch (e) {
    apiErrorBlock(e);
  }
};
