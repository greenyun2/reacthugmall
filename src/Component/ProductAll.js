import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
.row {
  width: 1280px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .col {
    flex: 1;
  }
}
`;


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery =  query.get('q') || ''; 
    console.log('쿼리값은?', searchQuery);
    let url = `https://my-json-server.typicode.com/greenyun2/reacthugmall/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProduct()
  }, [query]);

  return (
    <Container>
      <div className='row'>
      {productList.map((item) => (
        <div className='col' key={item.id}>
          <ProductCard item={item}/>
        </div>
      ))}
      </div>
    </Container>
  )
}

export default ProductAll;