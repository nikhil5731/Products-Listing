import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px 100px;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    margin: 20px 20px;
  }
`;

const PageIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 50px;
  height: 50px;
  padding: 2px;
  background-color: #f5f5f5;
  border-radius: 100%;
  margin: 0 4px;
`;

const CategorySelect = styled.select`
  padding: 10px;
  outline: none;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
`;

const OptionCategory = styled.option`
  background-color: #f5f5f5;
`;

const Pages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const Header = ({
  noOfPages,
  setCurrentPage,
  currentPage,
  setCurrentCategory,
  setSort,
}) => {
  const handleChangeCategory = (e) => {
    setCurrentCategory(e.target.value);
  };
  const handleChangeSort = (e) => {
    const value = e.target.value;
    if (value === "titleAscn") {
      setSort({
        attribute: "title",
        ascn: true,
      });
    } else if (value === "titleDesn") {
      setSort({ attribute: "title", ascn: false });
    } else if (value === "priceDesn") {
      setSort({ attribute: "price", ascn: false });
    } else if (value === "priceAscn") {
      setSort({ attribute: "price", ascn: true });
    } else if (value === "NoSort") {
      setSort({ attribute: "NoSort", ascn: true });
    }
  };
  return (
    <HeaderDiv>
      <Form action="">
        <CategorySelect
          id="cars"
          name="category"
          onChange={handleChangeCategory}
        >
          <OptionCategory value="select a category">
            Select a Category
          </OptionCategory>
          {categories.map((category) => (
            <OptionCategory value={category} key={category}>
              {category}
            </OptionCategory>
          ))}
        </CategorySelect>
        <CategorySelect id="cars" name="category" onChange={handleChangeSort}>
          <OptionCategory value="NoSort">Sort by:</OptionCategory>
          <OptionCategory value="titleAscn">A to Z</OptionCategory>
          <OptionCategory value="titleDesn">Z to A</OptionCategory>
          <OptionCategory value="priceDesn">Prices: High to Low</OptionCategory>
          <OptionCategory value="priceAscn">Prices: Low to High</OptionCategory>
        </CategorySelect>
      </Form>
      <Pages style={{}}>
        {Array.apply(null, Array(noOfPages)).map((e, i) => (
          <Pagination
            pageNumber={i + 1}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        ))}
      </Pages>
    </HeaderDiv>
  );
};

// PageIcons
const Pagination = ({ pageNumber, setCurrentPage, currentPage }) => {
  const handleClick = () => {
    setCurrentPage(pageNumber);
  };
  return (
    <PageIcon
      onClick={handleClick}
      style={{
        backgroundColor: `${currentPage === pageNumber ? "#01BB88" : ""}`,
      }}
    >
      {pageNumber}
    </PageIcon>
  );
};

export default Header;
