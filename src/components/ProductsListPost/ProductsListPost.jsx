
import ProductPost from "../ProductPost/ProductPost";
import "./ProductsListPost.css"

function ProductsListPost(){
    const products=[
            {name: "BMW M3 "},
            {name: "BMW"},
            {name: "BMW"},
            {name: "BMW"},
        ]

    return (
        <ul className="container-products">
           { products.map((product,index) => <li key={product.name + (++index)}><ProductPost name = {product.name}/></li>)}
        </ul>
    )
}

export default ProductsListPost;