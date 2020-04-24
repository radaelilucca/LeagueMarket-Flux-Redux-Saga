import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import * as CartActions from "../../store/modules/cart/actions";

import { Container, ProductTable, Total, NoItems } from "./styles";
import coins from "../../assets/images/coins.svg";
import noItems from "../../assets/images/404.png";

export default function Cart() {
  const dispatch = useDispatch();
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

  const cartSize = useSelector((state) => state.cart.length);

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cartSize !== 0 ? (
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
                    <img
                      className="coins"
                      src={coins}
                      alt={`Price: ${product.price}`}
                    />
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
                    <img
                      className="coins"
                      src={coins}
                      alt={`Subtotal: ${product.subtotal}`}
                    />{" "}
                    {product.subtotal}
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
      ) : (
        <img className="noItemsImage" src={noItems} alt="sdsa" />
      )}
      <footer>
        {cartSize !== 0 ? (
          <>
            <button type="button">Checkout</button>
            <Total>
              <span>TOTAL</span>
              <strong className="total">
                <img
                  className="coinsTotal"
                  src={coins}
                  alt={`Total: ${total}`}
                />
                {total}
              </strong>
            </Total>
          </>
        ) : (
          <NoItems>
            <h1>It looks like your cart is still empty.</h1>
            <Link to="/">
              <button type="button">Back to shopping</button>
            </Link>
          </NoItems>
        )}
      </footer>
    </Container>
  );
}
