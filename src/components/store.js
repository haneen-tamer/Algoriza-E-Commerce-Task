import StoreFilters from "./store-filters";
import StoreDisplayControls from "./store-display-controls";
import { useEffect, useState } from "react";
import StoreProductsDisplay from "./store-products-display";
import "../styles/_store.scss";
import products from "../data/store-data";

const Store = () => {
  const [filteredProdList, setProdList] = useState(products);
  const [lastFilterType, setLastFilterType] = useState("clear");
  const [isGrid, setGrid] = useState(true);
  const toggleGrid = () => {
    setGrid((prev) => {
      return !prev;
    });
  };
  const handleProdList = (type, filter) => {
    console.log(`${type} filter after ${lastFilterType}`);
    if (type === "sort") {
      setLastFilterType(type);
      setProdList([...filteredProdList.sort(filter)]);
      console.log(filter);
    } else {
      let list =
        type.includes(lastFilterType) || lastFilterType === "clear"
          ? products
          : filteredProdList;
      console.log(
        `searching on ${
          type.includes(lastFilterType) || lastFilterType === "clear"
            ? "products"
            : "filteredProdList"
        }`
      );
      setLastFilterType(type);
      let res = list.filter(filter);
      setProdList(res);
      console.log(`${res.length} results`);
    }
  };
  const [showFilters, setShowFilters] = useState(false);
  function toggleShowFilter(e) {
    setShowFilters((prev) => !prev);
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <div>
      <main className="store">
        <StoreFilters
          prodList={filteredProdList}
          listHandler={handleProdList}
          show={showFilters}
          showHandler={toggleShowFilter}
        />

        <section className="main-section">
          <StoreDisplayControls
            prodList={filteredProdList}
            listHandler={handleProdList}
            isGrid={isGrid}
            toggleGrid={toggleGrid}
            show={showFilters}
            showHandler={toggleShowFilter}
          />
          <StoreProductsDisplay prodList={filteredProdList} isGrid={isGrid} />
        </section>
      </main>
    </div>
  );
};

export default Store;
