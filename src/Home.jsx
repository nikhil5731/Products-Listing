import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { data, categories } from "./data";
import Header from "./components/Header";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const Home = () => {
  // let noOfPages = Math.ceil(data.products.length / 8);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);
  const [currentRecords, setCurrentRecords] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("select a category");
  const [noOfPages, setNoOfPages] = useState();
  const [sortBy, setSort] = useState({ attribute: "NoSort", ascn: true });

  const compareSort = (attribute, ascn) => {
    if (attribute === "NoSort") return;
    return function (a, b) {
      if (a[attribute] > b[attribute]) {
        return ascn ? 1 : -1;
      } else if (a[attribute] < b[attribute]) {
        return ascn ? -1 : 1;
      }
      return 0;
    };
  };

  useEffect(() => {
    setCurrentRecords(
      data.products
        .sort(compareSort(sortBy.attribute, sortBy.ascn))
        .filter((item) => {
          return (
            item.category === currentCategory ||
            currentCategory === "select a category"
          );
        })

        .slice(recordsPerPage * (currentPage - 1), currentPage * recordsPerPage)
    );
    setNoOfPages(
      Math.ceil(
        data.products.filter((item) => {
          return (
            item.category === currentCategory ||
            currentCategory === "select a category"
          );
        }).length / recordsPerPage
      )
    );
  }, [currentPage, currentCategory, sortBy]);
  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);
  return (
    <>
      <Header
        noOfPages={noOfPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setCurrentCategory={setCurrentCategory}
        setSort={setSort}
      />
      <Cards>
        {currentRecords &&
          currentRecords.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              desc={item.description}
              thumbnail={item.thumbnail}
            />
          ))}
      </Cards>
    </>
  );
};

export default Home;
