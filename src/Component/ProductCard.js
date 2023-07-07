import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 200px;
  }
`;


const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  }

  return (
    <Container onClick={showDetail}>
      <img src={item.img} />
      <div>{item.brand}</div>
      <div>{item.title}</div>
      <div>{item.price}원</div>
      <div>{item.new == true ? "신제품" : ""}</div>
    </Container>
  )
}

export default ProductCard