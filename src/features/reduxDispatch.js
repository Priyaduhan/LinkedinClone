import { changeBio, updatePriyaId } from "./bioSlice";

export const dispatchChangeBio = (dispatch, newPriyaBioValue) =>
  dispatch(changeBio(newPriyaBioValue));
export const dispatchChangeHandlePriya = (dispatch, priyaIdValue) =>
  dispatch(updatePriyaId(priyaIdValue));
