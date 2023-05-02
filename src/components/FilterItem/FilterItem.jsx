import Brand from "../Brand/Brand";
import "./FilterItem.css"

function FilterItem({filterItem,selectBrand}){
    return(
        <div className="filter-item-conteiner">
            <ul>
            <h2 className = "filter-name">{filterItem.name + ":"}</h2>
            {filterItem.brands.map(brand=>{
                return (
                    <li key= {brand.value}>
                        <Brand
                            byFilter = {filterItem}
                            selectBrand = {selectBrand}
                            brand={brand}
                        />
                    </li>)
            })}
            </ul>
        </div>
    )
}

export default FilterItem;