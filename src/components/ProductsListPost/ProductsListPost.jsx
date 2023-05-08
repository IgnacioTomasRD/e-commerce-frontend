
import { Stack } from "@mui/material";
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
        <Stack spacing={2.5}>
           { products.map((product,index) => <ProductPost key ={product.name + (++index)} name={product.name}/>)}
        </Stack>
    )
}

export default ProductsListPost;