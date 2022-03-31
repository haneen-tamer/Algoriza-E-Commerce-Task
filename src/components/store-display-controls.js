import { useEffect, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiViewGridOutline,
  mdiFormatListBulleted,
  mdiMagnify,
  mdiMenu,
} from "@mdi/js";
import "../styles/_control-panel.scss";

const Controls = ({
  prodList,
  listHandler,
  toggleGrid,
  isGrid,
  show,
  showHandler,
}) => {
  const [resText, setResText] = useState(prodList.length + " Results Found");
  const [searchTxt, setSearchTxt] = useState("");
  const handleSearch = (e) => {
    setSearchTxt(e.target.value);
    listHandler("search", (item) => {
      return item.name.includes(e.target.value);
    });
  };

  const handleSort = (e) => {
    console.log(e.target.value);
    let filter;
    switch (e.target.value) {
      case "Featured":
        filter = (a, b) => {
          return a.id - b.id;
        };
        break;
      case "Highest":
        filter = (a, b) => {
          return b.rating - a.rating;
        };
        break;
      case "Lowest":
        filter = (a, b) => {
          return a.rating - b.rating;
        };
        break;
    }
    listHandler("sort", filter);
  };

  const setDisplay = (id) => {
    let rm = id === "grid" ? "list" : "grid";
    document.getElementById(`${id}lbl`).classList.add("radio-active");
    document.getElementById(`${rm}lbl`).classList.remove("radio-active");
  };

  const handleDisplay = (e) => {
    // console.log(e.target.id);
    toggleGrid();
    setDisplay(e.target.id);
  };

  useEffect(() => {
    setResText(prodList.length + " results found");
  }, [prodList]);

  useEffect(() => {
    setDisplay("grid");
  }, []);

  return (
    <section style={styles.section}>
      <div className="header">
        <h2 className="res">{resText}</h2>

        <a href="#" onClick={showHandler} id="filter-toggle">
          <Icon path={mdiMenu} size={1} color="#7367f0" />
        </a>

        <div className="container">
          <select onChange={handleSort}>
            <option value="Featured">Featured</option>
            <option value="Highest">Highest</option>
            <option value="Lowest">Lowest</option>
          </select>
          <div role="radiogroup" className="radiogroup">
            <label className="radio" id="gridlbl">
              <input
                type="radio"
                id="grid"
                name="display-mode"
                onChange={handleDisplay}
                checked={isGrid}
              />
              <Icon path={mdiViewGridOutline} size={1} color="#7367f0" />
            </label>
            <label className="radio" id="listlbl">
              <input
                type="radio"
                id="list"
                name="display-mode"
                onChange={handleDisplay}
                checked={!isGrid}
              />
              <Icon path={mdiFormatListBulleted} size={1} color="#7367f0" />
            </label>
          </div>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search Product"
          value={searchTxt}
          onChange={handleSearch}
        />
        <Icon path={mdiMagnify} size={1} color="#6e6b7b" />
      </div>
    </section>
  );
};

const styles = {
  section: { margin: "0.25rem 0.15rem" },
};

export default Controls;
