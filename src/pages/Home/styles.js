import styled from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    justify-content: center;
    padding: 20px;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 130px;
      height: 130px;
      margin: auto;
      border: 4px solid #fece66;
    }
    strong {
      margin-top: 16px;
      font-size: 20px;
      text-align: left;
    }

    p {
      font-size: 16px;
      line-height: 18px;
      margin-top: 6px;
      margin-bottom: 10px;
    }

    span {
      font-size: 22px;
      line-height: 30px;
      color: #0d2f41;
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .coins {
        height: 20px;
        width: 20px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 10px;
        margin-left: 0;
        border: 0;
      }
    }

    button {
      background: #fece66;
      border-radius: 8px;
      border: 0;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: 0.2s;

      span {
        margin: 0 13px;
        color: #0d2f41;
        font-weight: bold;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #0d2f41;
        padding: 8px;
        color: #fff;
        font-size: 20px;

        svg {
          margin-right: 10px;
        }
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
