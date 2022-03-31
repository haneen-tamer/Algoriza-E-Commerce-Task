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
    if (type === "sort") {
      setLastFilterType(type);
      setProdList(filteredProdList.sort(filter));
      return;
    }
    let list = type.includes(lastFilterType) ? products : filteredProdList;
    setLastFilterType(type);
    setProdList(list.filter(filter));
    console.log(`list is ${filteredProdList.length}`);
  };
  const [showFilters, setShowFilters] = useState(false); //CHANGE TO FALSE
  const toggleShowFilter = () => {
    setShowFilters((prev) => !prev);
  };

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
