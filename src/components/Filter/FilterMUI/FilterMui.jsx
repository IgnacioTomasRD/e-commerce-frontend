import { useState } from "react";
import { Collapse } from "@mui/material";
import "./FilterMui.css";
import FilterItem from "../../FilterItem/FilterItem";
import Brand from "../../Brand/Brand";

const filtersDefault = [
  {
    name: "Brands",
    brands: [
      { value: "AUDI", selected: false },
      { value: "Mercedes Benz", selected: false },
      { value: "BMW", selected: false },
    ],
  },
  {
    name: "Type",
    brands: [
      { value: "Electric", selected: false },
      { value: "Sport", selected: false },
      { value: "Coupe", selected: false },
    ],
  },
];
const brandsSelectedDefault = [
  {
    value: "BMW",
    selected: true,
  },
];

function FilterMui() {
  const [expanded, setExpanded] = useState(false);
  const [filters, setFilters] = useState(filtersDefault);
  const [brandsSelected, setBrandsSelected] = useState(brandsSelectedDefault);

  const selectBrand= (byFilter,brand) => {
    const indexBrandSelected = byFilter.brands.indexOf(brand);
    const filterIndex = filters.indexOf(byFilter);
    const newFilters = [...filters]
    const newFilter = {...byFilter}
    newFilter.brands.splice(indexBrandSelected,1);
    newFilters[filterIndex] = newFilter;
    setFilters(newFilters);
    
    brand.selected = true;
    const newBrandsSelected = [...brandsSelected,brand];
    setBrandsSelected(newBrandsSelected);
  }

  return (
    <>
      <button className="box-filter" onClick={() => setExpanded(!expanded)}>
        <h3 className="box-filter_title">Filters</h3>
        <span
          className={
            expanded
              ? "box-filter_button-up-arrow"
              : "box-filter_button-down-arrow"
          }
        ></span>
      </button>
      <Collapse in={expanded}>
        <div className="container-labels">
          {filters.map((filterItem) => (
            <FilterItem
              key={filterItem.name}
              filterItem={filterItem}
              selectBrand = {selectBrand}
            />
          ))}
        </div>
      </Collapse>
      <ul className="container-filters-selected">
        {brandsSelected.map((brandSelected, index) => {
          return (
            <li key={brandSelected.value + index}>
              <Brand brand={brandSelected} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilterMui;
