import "./Brand.css"

function Brand({brand,selectBrand,byFilter,deselectBrand}){
    return(
        <button className = "container-brand" onClick={() => brand.selected ? deselectBrand(brand): selectBrand(byFilter,brand)}>
            <p className = "name-brand">{brand.value}</p>
            <span className = {brand.selected ?"logo-brand-minus" :"logo-brand-plus"}/>
        </button>
    )
}

export default Brand;