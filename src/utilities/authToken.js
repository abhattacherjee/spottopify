import moment from "moment";
import { invalidateToken } from "../store/token";

/**
 *
 * @param token
 * @param dispatch
 * @returns {token.value}
 */
export const checkIfSessionExpired = (token, dispatch) => {
  console.log("current:", moment());
  console.log("expiresIn:", token);
  if (moment().isAfter(token.expiresIn, "seconds")) {
    console.log("Token should expire");
    dispatch(invalidateToken());
  }
  return token.value;
};
