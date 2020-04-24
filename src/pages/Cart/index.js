import React from "react";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { connect, useDispatch, useSelector } from "react-redux";

import * as CartActions from "../../store/modules/cart/actions";

import { Container, ProductTable, Total } from "./styles";
import coins from "../../assets/images/coins.svg";

export default function Cart() {
  const total = useSelector((state) =>
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: product.price * product.amount,
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>

                <span className="price">
                  <img className="coins" src={coins} />
                  {product.price}
                </span>
              </td>

              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline
                      size={20}
                      color="#fece66"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />

                  <button type="button">
                    <MdAddCircleOutline
                      size={20}
                      color="#fece66"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong className="price">
                  <img className="coins" src={coins} /> {product.subtotal}
                </strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#fece66" />{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong className="total">
            <img className="coinsTotal" src={coins} />
            {total}
          </strong>
        </Total>
      </footer>
    </Container>
  );
}
