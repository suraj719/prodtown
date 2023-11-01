import React, { useState } from "react";
import { HomeStyle } from "./styles/Home.styled";
import Pagination from "./Pagination";
import { Card, Desc, Image, Title } from "./styles/Card.styled";
import { Category, Filter, Search } from "./styles/Filter.styled";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [data, setData] = useState([
    {
      id: 16,
      title: "Women's Removable Hooded Moto Biker Jacket",
      price: 29.95,
      description:
        "Faux leather jacket with removable hood and denim style. Hand wash only.",
      category: "women",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 5,
      title: "John Hardy Women's Dragon Chain Bracelet",
      price: 695,
      description:
        "Inspired by the mythical water dragon for love and protection.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 10,
      title: "SanDisk 1TB Internal SSD (SATA III)",
      price: 109,
      description: "Upgrade your PC with faster boot up and response times.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 4,
      title: "Men's Casual Slim Fit",
      price: 15.99,
      description:
        "Casual slim fit shirts for various occasions. Check size details below.",
      category: "men",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 14,
      title: "Samsung 49-Inch Curved Gaming Monitor",
      price: 999.99,
      description:
        "Super ultrawide gaming monitor with QLED technology and high refresh rate.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 20,
      title: "DANVOUY Women's Casual Cotton T-Shirt",
      price: 12.99,
      description:
        "Casual V-neck t-shirt with letter print. Soft and stretchy fabric.",
      category: "women",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 7,
      title: "White Gold Princess Diamond Ring",
      price: 9.99,
      description:
        "Classic promise ring for special occasions. Show your love.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description:
        "Satisfaction guaranteed. Designed and sold by Hafeez Center in the US.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 13,
      title: 'Acer 21.5" Full HD IPS Monitor',
      price: 599,
      description:
        "21.5-inch Full HD IPS display with Radeon Free Sync technology.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 2,
      title: "Men's Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim fit, raglan sleeves, and soft fabric for casual fashion.",
      category: "men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Men's Cotton Jacket",
      price: 55.99,
      description:
        "Great for outdoor activities in Spring/Autumn/Winter. Ideal gift choice.",
      category: "men",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive for Playstation 4",
      price: 114,
      description:
        "Expand your PS4 gaming experience with high-capacity portable drive.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 1,
      title: "Fjallraven Backpack (15-inch Laptop)",
      price: 109.95,
      description:
        "Perfect for everyday use and forest walks. Fits up to 15-inch laptops.",
      category: "men",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD (SATA III 2.5)",
      price: 109,
      description:
        "High transfer speeds and advanced cache technology. Slim design.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "Polyester interlock fabric with moisture-wicking and a V-neck collar.",
      category: "women",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 8,
      title: "Rose Gold Plated Double Flared Earrings",
      price: 10.99,
      description:
        "Rose gold-plated tunnel plug earrings made of 316L stainless steel.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive",
      price: 64,
      description:
        "High-capacity portable external hard drive with USB 3.0 compatibility.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  ]);
  const oridata = [
    {
      id: 16,
      title: "Women's Removable Hooded Moto Biker Jacket",
      price: 29.95,
      description:
        "Faux leather jacket with removable hood and denim style. Hand wash only.",
      category: "women",
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 5,
      title: "John Hardy Women's Dragon Chain Bracelet",
      price: 695,
      description:
        "Inspired by the mythical water dragon for love and protection.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 10,
      title: "SanDisk 1TB Internal SSD (SATA III)",
      price: 109,
      description: "Upgrade your PC with faster boot up and response times.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 4,
      title: "Men's Casual Slim Fit",
      price: 15.99,
      description:
        "Casual slim fit shirts for various occasions. Check size details below.",
      category: "men",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 14,
      title: "Samsung 49-Inch Curved Gaming Monitor",
      price: 999.99,
      description:
        "Super ultrawide gaming monitor with QLED technology and high refresh rate.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 20,
      title: "DANVOUY Women's Casual Cotton T-Shirt",
      price: 12.99,
      description:
        "Casual V-neck t-shirt with letter print. Soft and stretchy fabric.",
      category: "women",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 7,
      title: "White Gold Princess Diamond Ring",
      price: 9.99,
      description:
        "Classic promise ring for special occasions. Show your love.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description:
        "Satisfaction guaranteed. Designed and sold by Hafeez Center in the US.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 13,
      title: 'Acer 21.5" Full HD IPS Monitor',
      price: 599,
      description:
        "21.5-inch Full HD IPS display with Radeon Free Sync technology.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 2,
      title: "Men's Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim fit, raglan sleeves, and soft fabric for casual fashion.",
      category: "men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Men's Cotton Jacket",
      price: 55.99,
      description:
        "Great for outdoor activities in Spring/Autumn/Winter. Ideal gift choice.",
      category: "men",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive for Playstation 4",
      price: 114,
      description:
        "Expand your PS4 gaming experience with high-capacity portable drive.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 1,
      title: "Fjallraven Backpack (15-inch Laptop)",
      price: 109.95,
      description:
        "Perfect for everyday use and forest walks. Fits up to 15-inch laptops.",
      category: "men",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD (SATA III 2.5)",
      price: 109,
      description:
        "High transfer speeds and advanced cache technology. Slim design.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "Polyester interlock fabric with moisture-wicking and a V-neck collar.",
      category: "women",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 8,
      title: "Rose Gold Plated Double Flared Earrings",
      price: 10.99,
      description:
        "Rose gold-plated tunnel plug earrings made of 316L stainless steel.",
      category: "Jewelry",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive",
      price: 64,
      description:
        "High-capacity portable external hard drive with USB 3.0 compatibility.",
      category: "Electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  ];

  const [currentPage, setCurrpage] = useState(1);
  const [ProductsPerPage, SetProductsPerPage] = useState(6);
  const idlastp = currentPage * ProductsPerPage;
  const idfirstp = idlastp - ProductsPerPage;
  const currentProducts = data.slice(idfirstp, idlastp);
  const paginate = (pagenum) => setCurrpage(pagenum);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilter("")
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
    if (value === "inc") {
      setData(
        oridata.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    } else if (value === "dec") {
      setData(
        oridata.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      );
    } else {
      setData(oridata);
    }
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
                <option value="women">Women's</option>
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
