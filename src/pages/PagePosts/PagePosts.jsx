import { Button, Container, Drawer, Stack } from "@mui/material";
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

function PagePosts() {
  
  const dispatch = useDispatch();
  const postsActive = useSelector((state) => state.posts);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      console.log("🚀 ~ file: PagePosts.jsx:21 ~ getPosts ~ posts:", posts);
      dispatch(setPosts(posts));
    };
    if (postsActive.length === 0) {
      getPosts();
    }
  }, []);

  return (
    <>
      <LayoutPage>
        <main className="container-models">
          <h2 className="container-models_title">Models</h2>
          <Searcher />
          <Filter />
          <div className="separador" />
          <ProductsListPost />
          <ShoppingCart/>
        </main>
      </LayoutPage>
    </>
  );
}

export default PagePosts;
