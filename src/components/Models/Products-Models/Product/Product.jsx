import "./Product.css"


function Product({name}){

    return (
        <div className="container-product">
            <div className="product-img"/>
            <h2>{name}</h2>
        </div>
    )
}

export default Product;