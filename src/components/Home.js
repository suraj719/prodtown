import React, { useState } from "react";
import { HomeStyle } from "./styles/Home.styled";
import Pagination from "./Pagination";
import { Card, Desc, Image, Title } from "./styles/Card.styled";
import { Category, Filter, Search } from "./styles/Filter.styled";
import oridata from "../data.json";
export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(oridata);
  const [currentPage, setCurrpage] = useState(1);
  const [ProductsPerPage, SetProductsPerPage] = useState(6);
  const idlastp = currentPage * ProductsPerPage;
  const idfirstp = idlastp - ProductsPerPage;
  const currentProducts = data.slice(idfirstp, idlastp);
  const paginate = (pagenum) => setCurrpage(pagenum);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilter("");
    if (search.length) {
      setData(
        oridata.filter((pro) =>
          pro.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      );
    } else {
      setData(oridata);
    }
  };

  const handlecateg = (e) => {
    setFilter("category");
    const cat = e.target.value;
    if (cat !== "select") {
      setData(
        oridata.filter((pro) =>
          pro.category.toLowerCase().includes(cat.toLocaleLowerCase())
        )
      );
    } else {
      setData(oridata);
    }
  };

  const handleprice = (e) => {
    setFilter("price");
    const { value } = e.target;
    let sortedData;

    if (value === "inc") {
      sortedData = oridata
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (value === "dec") {
      sortedData = oridata
        .slice()
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      sortedData = [...oridata]; // No sorting, just use the original data
    }

    setData(sortedData);
  };

  const handleRating = (e) => {
    setFilter("rating");
    const { value } = e.target;
    if (value === "4to5") {
      setData(
        oridata.filter((pro) => {
          return pro.rating.rate >= 4 && pro.rating.rate <= 5;
        })
      );
    } else if (value === "3to4") {
      setData(
        oridata.filter((pro) => {
          return pro.rating.rate >= 3 && pro.rating.rate <= 4;
        })
      );
    } else if (value === "2to3") {
      setData(
        oridata.filter((pro) => {
          return pro.rating.rate >= 2 && pro.rating.rate <= 3;
        })
      );
    } else if (value === "1to2") {
      setData(
        oridata.filter((pro) => {
          return pro.rating.rate >= 1 && pro.rating.rate <= 2;
        })
      );
    } else {
      setData(oridata);
    }
  };
  return (
    <>
      <Filter>
        <Category>
          <label>Sort By Category: </label>
          {filter === "category" ? (
            <>
              <select onChange={handlecateg} defaultValue="select">
                <option value="select">Random</option>
                <option value="electronics">Electronics</option>
                <option value="Jewelry">Jewelery</option>
                <option value="men">Men's</option>
                <option value="female">Women's</option>
              </select>
            </>
          ) : (
            <>
              <select
                onClick={() => setFilter("category")}
                defaultValue="select"
              >
                <option value="select">Random</option>
              </select>
            </>
          )}
        </Category>
        {filter === "price" ? (
          <>
            <Category>
              <label>Sort By Price: </label>
              <select onChange={handleprice}>
                <option value="rand">Random</option>
                <option value="inc">Increasing</option>
                <option value="dec">Decreasing</option>
              </select>
            </Category>
          </>
        ) : (
          <>
            <Category>
              <label>Sort By Price: </label>
              <select onClick={() => setFilter("price")}>
                <option value="rand">Random</option>
              </select>
            </Category>
          </>
        )}
        {filter === "rating" ? (
          <>
            <Category>
              <label>Sort By Rating: </label>
              <select onChange={handleRating}>
                <option value="rand">Random</option>
                <option value="4to5">4 to 5</option>
                <option value="3to4">3 to 4</option>
                <option value="2to3">2 to 3</option>
                <option value="1to2">1 to 2</option>
              </select>
            </Category>
          </>
        ) : (
          <>
            <Category>
              <label>Sort By Rating: </label>
              <select onClick={() => setFilter("rating")}>
                <option value="rand">Random</option>
              </select>
            </Category>
          </>
        )}
        <Search>
          <input
            type="search"
            placeholder="Search by Product name"
            onChange={handleSearch}
          />
        </Search>
      </Filter>
      {data?.length ? (
        <>
          <HomeStyle>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {currentProducts.map((pro, index) => {
                return (
                  <Card key={index}>
                    <Image src={pro.image} alt="pro-img"></Image>
                    <p>
                      <span>Price: </span>${pro.price}
                    </p>
                    <p>
                      <span>Rating: </span>
                      {pro.rating.rate} ({pro.rating.count})
                    </p>
                    <Title>{pro.title}</Title>
                    <Desc>{pro.description}</Desc>
                  </Card>
                );
              })}
            </div>
            <Pagination
              ProductsPerPage={ProductsPerPage}
              totalProducts={data.length}
              paginate={paginate}
            />
          </HomeStyle>
        </>
      ) : (
        <div style={{ marginTop: "50px" }}>
          <Title>No products found</Title>
        </div>
      )}
    </>
  );
}
