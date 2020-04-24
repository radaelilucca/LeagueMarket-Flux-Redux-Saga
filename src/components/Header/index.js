import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Cart } from "./styles";

import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LeagueMarket" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Cart</strong>
          <span>{cartSize} itens </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
