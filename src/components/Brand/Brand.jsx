import "./Brand.css"

function Brand({brand,selectBrand,byFilter}){
    return(
        <button className = "container-brand" onClick={() => selectBrand(byFilter,brand)}>
            <p className = "name-brand">{brand.value}</p>
            <span className = "logo-brand-plus"/>
        </button>
    )
}

export default Brand;