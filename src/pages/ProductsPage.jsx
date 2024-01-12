import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { useProducts } from "../context/productContext";

import Card from "../components/Card";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.scss";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const products = useProducts();

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [displayed, setDisplayed] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
