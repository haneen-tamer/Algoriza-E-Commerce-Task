import { useEffect, useState } from "react";
import "../styles/_filter-panel.scss";
import Rating from "./rating";

const CustomRadio = ({ labelText, val, indx, group, handler }) => {
  return (
    <div className="custom-control">
      <label>
        <input
          className="custom-control-input"
          type="radio"
          value={val}
          id={group + indx}
          name={group}
          onChange={handler}
        />
        {labelText}
      </label>
    </div>
  );
};

const StoreFilters = ({ prodList, listHandler, show, showHandler }) => {
  let id = 0;
  const handleRangeCheck = (e) => {
    // console.log(e.target.value);
    let filter = () => {
      return true;
    };
    switch (e.target.value) {
      case "all":
        filter = () => {
          return true;
        };
        break;
      case "lt10":
        filter = (item) => {
          return item.price <= 10;
        };
        break;
      case "lt100":
        filter = (item) => {
          return item.price > 10 && item.price <= 100;
        };
        break;
      case "lt500":
        filter = (item) => {
          return item.price > 100 && item.price <= 500;
        };
        break;
      case "gt500":
        filter = (item) => {
          return item.price > 500;
        };
        break;
    }
    listHandler("radio-range", filter);
  };

  const handleCatCheck = (e) => {
    // console.log(e.target.value);
    listHandler("radio-cat", (item) => {
      return item.category.includes(e.target.value);
    });
  };

  const handleBrandCheck = (e) => {
    // console.log(e.target.value);
    listHandler("radio-brand", (item) => {
      return item.brand.toLowerCase().includes(e.target.value.toLowerCase());
    });
  };

  const [rateCount, setRateCount] = useState([0, 0, 0, 0]);
  useEffect(() => {
    setRateCount(
      rateCount.map((elem, indx) => {
        return prodList.reduce((sum, item) => {
          //   console.log(`at ${indx}, ${sum}`);
          let add = item.rating == indx + 1 ? 1 : 0;
          return sum + add;
        }, 0);
      })
    );
  }, [prodList]);

  useEffect(() => {
    let overlay = document.getElementById("filter-overlay");
    if (show) {
      document.getElementById("filters").classList.add("show");
      overlay.classList.add("show");
      overlay.addEventListener("mouseup", showHandler);
    } else {
      document.getElementById("filters").classList.remove("show");
      overlay.removeEventListener("mouseup", showHandler);
      overlay.classList.remove("show");
      // console.log(overlay);
    }
  }, [show]);

  return (
    <aside id="filters">
      {!show && <h2>Filters</h2>}
      <div className="card">
        <section>
          <h3>Multi Range</h3>
          <div role="radiogroup">
            <CustomRadio
              labelText="All"
              val="all"
              indx={id++}
              group="radio-range"
              handler={handleRangeCheck}
            />
            <CustomRadio
              labelText="&lt;= $10"
              val="lt10"
              indx={id++}
              group="radio-range"
              handler={handleRangeCheck}
            />
            <CustomRadio
              labelText="$10 - $100"
              val="lt100"
              indx={id++}
              group="radio-range"
              handler={handleRangeCheck}
            />
            <CustomRadio
              labelText="$100 - $500"
              val="lt500"
              indx={id++}
              group="radio-range"
              handler={handleRangeCheck}
            />
            <CustomRadio
              labelText="&gt;= $500"
              val="gt500"
              indx={id++}
              group="radio-range"
              handler={handleRangeCheck}
            />
          </div>
          <div>
            <h3>Price Range</h3>
            <input type="range" min="0" max="1000" list="tickmarks" />
            <datalist id="tickmarks">
              <option value="0" label="0"></option>
              <option value="100" label="100"></option>
            </datalist>
          </div>
          <div role="radiogroup">
            <h3>Categories</h3>
            <CustomRadio
              labelText="Appliances"
              val="Appliances"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Audio"
              val="Audio"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Cameras & Camcorders"
              val="Cameras & Camcorders"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Car Electronics & GPS"
              val="Car Electronics & GPS"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Cell Phones"
              val="Cell Phones"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Computers & Tablets"
              val="Computers & Tablets"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Health, Fitness & Beauty"
              val="Health, Fitness & Beauty"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Office & School Supplies"
              val="Office & School Supplies"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="TV & Home Theater"
              val="TV & Home Theater"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
            <CustomRadio
              labelText="Video Games"
              val="Video Games"
              indx={id++}
              group="radio-cat"
              handler={handleCatCheck}
            />
          </div>
          <div role="radiogroup">
            <h3>Brands</h3>
            <CustomRadio
              labelText="Insignia™"
              val="Insignia"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Samsung"
              val="Samsung"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Metra"
              val="Metra"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="HP"
              val="HP"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Samsung"
              val="Samsung"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Apple"
              val="Apple"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="GE"
              val="GE"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Sony"
              val="Sony"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Incipio"
              val="Incipio"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="KitchenAid"
              val="KitchenAid"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
            <CustomRadio
              labelText="Whirlpool"
              val="Whirlpool"
              indx={id++}
              group="radio-brand"
              handler={handleBrandCheck}
            />
          </div>
          <div>
            <h3>Rating</h3>
            <div className="rating-count">
              <Rating rating={4} /> &amp;up
              <p>{rateCount[3]}</p>
            </div>
            <div className="rating-count">
              <Rating rating={3} /> &amp;up
              <p>{rateCount[2]}</p>
            </div>
            <div className="rating-count">
              <Rating rating={2} /> &amp;up
              <p>{rateCount[1]}</p>
            </div>
            <div className="rating-count">
              <Rating rating={1} /> &amp;up
              <p>{rateCount[0]}</p>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default StoreFilters;
