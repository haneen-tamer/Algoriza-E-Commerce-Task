import ProductItem from "./product-item";
import "../styles/_products-panel.scss";
import { useState } from "react";
const Products = (props) => {
  const pages = [...Array(Number(props.prodList.length / 9)).keys()];
  let num = Number(props.prodList.length / pages.length);
  const [currentPage, setCurrentPage] = useState(0);
  const [prodList, setProdList] = useState(props.prodList.slice(0, num));
  function jumpToPage(p) {
    let num = Number(props.prodList.length / pages.length);
    setProdList(props.prodList.slice(p * num, p * num + num));

    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById(p).classList.add("active");

    setCurrentPage(p);
  }
  function pageClick(e) {
    let p = e.target.id;
    jumpToPage(p);
  }
  function prevPage() {
    jumpToPage(currentPage - 1);
  }
  function nextPage() {
    jumpToPage(currentPage + 1);
  }
  return (
    <div>
      <section className={props.isGrid ? "grid" : "list"}>
        {prodList.map((item) => {
          return (
            <ProductItem key={item.id} item={item} isGrid={props.isGrid} />
          );
        })}
      </section>
      <div className="pagination">
        <a onClick={prevPage}>&laquo;</a>
        {pages.map((i) => {
          return (
            <a
              className={`page ${i == 0 ? "active" : ""}`}
              key={i}
              id={i}
              onClick={pageClick}
            >
              {i + 1}
            </a>
          );
        })}
        <a onClick={nextPage}>&raquo;</a>
      </div>
    </div>
  );
};

export default Products;
