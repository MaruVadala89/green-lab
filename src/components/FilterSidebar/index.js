import React from "react";

const prices = [
  {
    id: 1,
    min: 500,
    max: 3000,
  },
  {
    id: 2,
    min: 3050,
    max: 6000,
  },
  {
    id: 3,
    min: 6050,
    max: null,
  },
];

const categories = ["Plantas", "Arboles", "Flores"];
const clases = ["Interior", "Exterior"];


const FilterSidebar = ({ filter, changeHandler, priceChangeHandler }) => {
  return (
    <div className="col-lg-4">
      <div className="shop-filter-wrap">
        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Buscar</h2>
            <div className="shop-filter-search">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Precio</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Todos los precios
                  <input
                    type="radio"
                    value={""}
                    checked={!filter.price}
                    name="price"
                    onChange={changeHandler}
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {prices.map((price) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    ${price.min} {price.max ? "- $" : ""}
                    {price.max || " and more"}
                    <input
                      checked={filter.price.id === price.id}
                      type="radio"
                      value={JSON.stringify(price)}
                      onChange={priceChangeHandler}
                      name="price"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Categoria</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Todas las categorias
                  <input
                    checked={filter.category === ""}
                    type="radio"
                    value=""
                    onChange={changeHandler}
                    name="category"
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {categories.map((category) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    {category}
                    <input
                      checked={filter.category === category}
                      type="radio"
                      value={category}
                      onChange={changeHandler}
                      name="category"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="filter-item">
          <div className="shop-filter-item">
            <h2>Plantas de interior/exterior</h2>
            <ul>
              <li>
                <label className="topcoat-radio-button__label">
                  Todas las clases:
                  <input
                    checked={filter.clase === ""}
                    type="radio"
                    value=""
                    onChange={changeHandler}
                    name="clase"
                  />
                  <span className="topcoat-radio-button"></span>
                </label>
              </li>
              {clases.map((clase) => (
                <li>
                  <label className="topcoat-radio-button__label">
                    {clase}
                    <input
                      checked={filter.clase === clase}
                      type="radio"
                      value={clase}
                      onChange={changeHandler}
                      name="clase"
                    />
                    <span className="topcoat-radio-button"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
