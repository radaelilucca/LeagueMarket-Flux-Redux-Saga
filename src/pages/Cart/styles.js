import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 10px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    align-items: center;

    button {
      background: #fece66;
      border-radius: 8px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      border: 0;
      transition: 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .noItemsImage {
    margin: 0 35%;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 90px;
    border: 4px solid #fece66;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    display: block;
  }

  .coins {
    height: 20px;
    width: 20px;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 10px;
    margin-left: 0;
    border: 0;
  }

  .price {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #eee;
      border-radius: 5px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }

  .coinsTotal {
    height: 20px;
    margin: 0 5px;
  }
`;

export const NoItems = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  h1 {
    margin: 12px;
    color: #41414d;
  }

  button {
    font-size: 20px;
    color: #41414d;
  }
`;
