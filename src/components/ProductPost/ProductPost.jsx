import "./ProductPost.css"


function ProductPost({name}){

    return (
        <div className="container-product">
            <div className="product-img"/>
            <h2>{name}</h2>
        </div>
    )
}

export default ProductPost;