import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 50vh;
  width: 20rem;
  overflow: hidden;
  border-radius: 20px;
  transition: 0.1s ease;
  background-color: #F5F5F5;

  &:hover {
    scale: 115%;
    filter: drop-shadow(10px 10px 20px black);
  }
`;
const ImgDiv = styled.div`
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
`;

const Title = styled.div`
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
  background-color: #F5F5F5;
`;
const Price = styled.div`
  width: 50%;
  text-align: end;
  white-space: nowrap;
  background-color: #F5F5F5;
  overflow: hidden;
`;

const PriceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bolder;
  font-size: larger;
`;

const CardDesc = styled.span`
  height: 15%;
  overflow: hidden;
  white-space: pre-wrap;
  background-color: #F5F5F5;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Card = ({ title, desc, price, thumbnail }) => {
  return (
    <CardDiv>
      {/* Image */}
      <ImgDiv>
        <CardImg src={thumbnail} alt="" />
      </ImgDiv>
      {/* Title, Price */}
      <PriceTitle>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </PriceTitle>
      {/* Description */}
      <CardDesc>{desc}</CardDesc>
    </CardDiv>
  );
};

export default Card;
