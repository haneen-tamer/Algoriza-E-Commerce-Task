import ProductItem from "./product-item";
import "../styles/_products-panel.scss";
import { useState, useEffect } from "react";
const Products = (props) => {
  let len = Math.round(props.prodList.length / 9)
    ? Math.round(props.prodList.length / 9)
    : 1;
  const [pages, setPages] = useState([...Array(len).keys()]);

  let num = Math.round(props.prodList.length / pages.length);
  const [currentPage, setCurrentPage] = useState(0);
  const [prodList, setProdList] = useState(props.prodList.slice(0, num));
  // const [pages, setPages] = useState([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [prodList, setProdList] = useState([]);

  const jumpToPage = (p, pages) => {
    let num = Math.round(props.prodList.length / pages.length);
    let start = p * num;
    let end =
      p * num + num < props.prodList.length
        ? p * num + num
        : props.prodList.length;
    console.log(`displaying ${num} items from ${start} to ${end}`);
    console.log(`div ${props.prodList.length}  ${pages.length}`);
    setProdList(props.prodList.slice(start, end));

    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById(p).classList.add("active");

    setCurrentPage(p);
  };
  function pageClick(e) {
    let p = e.target.id;
    jumpToPage(p, pages);
  }
  function prevPage() {
    if (currentPage - 1 < 0) return;
    jumpToPage(currentPage - 1, pages);
  }
  function nextPage() {
    if (currentPage + 1 >= pages.length) return;
    jumpToPage(currentPage + 1, pages);
  }

  useEffect(() => {
    let len = Math.round(props.prodList.length / 9)
      ? Math.round(props.prodList.length / 9)
      : 1;
    console.log(`displaying ${len} pages`);
    let p = [...Array(len).keys()];
    setPages(p);
    jumpToPage(0, p);
  }, [props.prodList]);

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
              className={`page ${i === 0 ? "active" : ""}`}
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
