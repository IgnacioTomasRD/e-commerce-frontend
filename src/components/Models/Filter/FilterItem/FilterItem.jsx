import Brand from "../Brand/Brand";
import "./FilterItem.css"

function FilterItem({name,values}){
    return(
        <div className="filter-item-conteiner">
            <ul>
            <h2 className = "filter-name">{name + ":"}</h2>
            {values.map(value=>{
                return (
                    <li key= {value}>
                        <Brand 
                            value={value}
                        />
                    </li>)
            })}
            </ul>
        </div>
    )
}

export default FilterItem;