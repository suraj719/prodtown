import React from "react";
import { PaginationStyle,Button } from "./styles/Pagination.style";

const Pagination = ({ ProductsPerPage, totalProducts, paginate }) => {
  let PageNums = [];
  for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
    PageNums.push(i);
  }
  return (
    <>
      <PaginationStyle>
        <ul className="">
          {PageNums.map((num) => {
            return (
              <li key={num}>
                <Button onClick={() => paginate(num)} href="#">
                  {num}
                </Button>
              </li>
            );
          })}
        </ul>
      </PaginationStyle>
    </>
  );
};

export default Pagination;
