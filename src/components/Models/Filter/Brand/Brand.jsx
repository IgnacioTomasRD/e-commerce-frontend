import "./Brand.css"

function Brand({value}){
    return(
        <div className = "container-brand">
            <p className = "name-brand">{value}</p>
            <span className = "logo-brand-plus"/>
        </div>
    )
}

export default Brand;