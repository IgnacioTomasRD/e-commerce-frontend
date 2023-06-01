import {
  Box,
  Button,
  Container,
  Drawer,
  Pagination,
  Stack,
} from "@mui/material";
import Filter from "../../components/Filter/Filter";
import ProductsListPost from "../../components/ProductsListPost/ProductsListPost";
import Searcher from "../../components/Searcher/Seacher";
import "./PagePosts.css";
import { useEffect } from "react";
import LayoutPage from "../../utils/LayoutPage";
import { fetchPosts } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../reducer/postsSlice";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { useMediaQuery } from "@uidotdev/usehooks";

function PagePosts() {
  const dispatch = useDispatch();
  const postsActive = useSelector((state) => state.posts);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      dispatch(setPosts(posts));
    };
    if (postsActive.length === 0) {
      getPosts();
    }
  }, []);

  return (
    <>
      <LayoutPage shoppingCart>
        <main className="container-models">
          <h2 className="container-models_title">Models</h2>
          <Searcher />
          <Filter />
          <div className="separador" />
          <ProductsListPost />
          <Stack flexDirection={'row'} justifyContent={'center'} sx={{ mt: 3, mb: 3, width: 1 }}>
            <Pagination
              size= {isSmallDevice ? "small":"large"}
              sx={{ 
                '& .MuiPaginationItem-root':{
                  fontSize: '1.7rem'
                }
              }}
              count={10}
              color="primary"
            />
          </Stack>
          <ShoppingCart />
        </main>
      </LayoutPage>
    </>
  );
}

export default PagePosts;
