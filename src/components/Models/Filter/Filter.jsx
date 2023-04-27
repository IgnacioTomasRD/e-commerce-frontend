import Brand from "./Brand/Brand";
import "./Filter.css"
import FilterItem from "./FilterItem/FilterItem";

function Filter(){
    const filters = [
        {name: "Brands", values:["AUDI","Ferrari","Mercedes Benz","Jeep"]},
        {name: "Type", values:["Sedán","Electric","Coupe","Sport",]}
    ];

    const brandsSelected=[{
        value: "BMW"
    }];
    let i = 0;
    return(
        <>
            <button className="box-filter">
                <h3 className="box-filter_title">Filters</h3>
                <span className="box-filter_button-down-arrow"></span>
            </button>
            <div className="container-labels">
                {
                    filters.map(filterItem =>
                        <FilterItem
                            key = {filterItem.name}
                            name = {filterItem.name}
                            values = {filterItem.values}
                        />
                    )
                }
            </div>
            <ul className="container-filters-selected">
                {
                    brandsSelected.map(brandSelected => {
                        return (
                        <li key={brandSelected.value + (++i)}>
                            <Brand  value= {brandSelected.value}/>
                        </li>
                        )})
                }
            </ul>
        </>
    )
}

export default Filter;