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

function FilterMui() {
  const [expanded, setExpanded] = useState(false);
  const [filters, setFilters] = useState(filtersDefault);
  const [brandsSelected, setBrandsSelected] = useState([]);

  const selectBrand= (byFilter,brand) => {
    const indexBrandSelected = byFilter.brands.indexOf(brand);
    const filterIndex = filters.indexOf(byFilter);
    const newFilters = [...filters]
    const newFilter = {...byFilter}
    newFilter.brands.splice(indexBrandSelected,1);
    newFilters[filterIndex] = newFilter;
    setFilters(newFilters);
    
    brand.selected = true;
    const newBrand = {byFilter, ...brand}
    const newBrandsSelected = [...brandsSelected,newBrand];
    setBrandsSelected(newBrandsSelected);
  }

  const deselectBrand = (brand) => {
    brand.selected = false;
    const indexBrandOnSelectedBrands = brandsSelected.indexOf(brand);
    const newBrandsSelected = [...brandsSelected];
    newBrandsSelected.splice(indexBrandOnSelectedBrands,1);
    setBrandsSelected(newBrandsSelected);
    const byFilter = brand.byFilter;

    const newFilters = [...filters];
    const filterIndex = filters.indexOf(byFilter);
    const newFilter = {...byFilter}

    newFilter.brands.push(brand);
    newFilters[filterIndex] = newFilter;
    setFilters(newFilters);
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
              <Brand brand={brandSelected} deselectBrand = {deselectBrand} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilterMui;
