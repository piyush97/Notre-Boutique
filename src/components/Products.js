import React from "react";
import styled from "styled-components";
import { POPULAR_PRODUCTS } from "../utils/constants";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {POPULAR_PRODUCTS.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Container>
  );
};

export default Products;
