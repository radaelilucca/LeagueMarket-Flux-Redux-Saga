import { call, select, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import history from "../../../services/history";

import { toast } from "react-toastify";

import { addToCartSucess, updateAmountSucess } from "./actions";

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error("Quandtidade solicitada fora de estoque.");
    return;
  }

  if (productExists) {
    yield put(updateAmountSucess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSucess(data));
    history.push("/cart");
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error("Quandtidade solicitada fora de estoque.");
    return;
  }

  yield put(updateAmountSucess(id, amount));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
]);
