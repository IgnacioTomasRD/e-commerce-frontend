import Product from "./Product/Product";
import "./Products.css"

function Products(){
    const products=[
            {name: "BMW M3 "},
            {name: "BMW"},
            {name: "BMW"},
            {name: "BMW"},
        ]
    let i = 0;
    return (
        <ul className="container-products">
           { products.map(product => <li key={product.name + (++i)}><Product name = {product.name}/></li>)}
        </ul>
    )
}

export default Products;