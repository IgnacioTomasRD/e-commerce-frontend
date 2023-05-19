import { Stack } from "@mui/material";
import ProductPost from "../ProductPost/ProductPost";
import "./ProductsListPost.css";
import { useDispatch } from "react-redux";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";

const post = {
  id: '1',
  product: {
    name: "AMG GTR 2020",
    description:
      "from 0 to 100KM/H in 3.6s, The car has up-to-date service",
    category: "SPORT",
    characteristics: [
      {
        name: "KM",
        value: 30,
      },
      {
        name: "year",
        value: "2020",
      },
    ],
    imgs: ["/src/assets/imgs/mb.jpg"],
  },
  description: "The best financing, 98 installments with compound interest",
  price: 200000,
  stock: 10,
  state: "ACTIVE",
}

const posts = [post,{...post,id:'2', product:{ ...post.product, imgs:["/src/assets/imgs/amggtr.jpg","/src/assets/imgs/mb.jpg"]}},{...post,id:'3', product:{ ...post.product, imgs:["/src/assets/imgs/amggt.jpg"]}}]

function ProductsListPost() {
  const dispatch = useDispatch();
  const navigateTo = useNavigateToTop();

  const selectedPost = (post) => () =>{
    navigateTo(post.id)
  } 


  return (
    <Stack spacing={2.5}>
      {posts.map((post, index) => (
        <ProductPost
          name={post.product.name}
          km={post.product.characteristics.find(item => item.name === "KM")?.value}
          year={post.product.characteristics.find(item => item.name === "year")?.value}
          category={post.product.category}
          price={post.price}
          key={index}
          img = {post.product.imgs[0]}
          id = {post.id}
          handleClick = {selectedPost(post)}
        />
      ))}
    </Stack>
  );
}

export default ProductsListPost;
