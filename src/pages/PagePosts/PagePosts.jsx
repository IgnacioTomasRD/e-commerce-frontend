import {
  Pagination,
  Stack,
} from "@mui/material";
import Filter from "../../components/Filter/Filter";
import ProductsListPost from "../../components/ProductsListPost/ProductsListPost";
import Searcher from "../../components/Searcher/Seacher";
import "./PagePosts.css";
import { useEffect, useState } from "react";
import LayoutPage from "../../utils/LayoutPage";
import { fetchPosts } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { useMediaQuery,useWindowScroll } from "@uidotdev/usehooks";

function PagePosts() {
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [posts,setPosts] = useState([])
  const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");
  const [_, scrollTo] = useWindowScroll();

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts(page);
      setTotalPages(fetchedPosts.pages);
      setPosts(fetchedPosts.posts);
    };
    getPosts();
  }, [page]);

  const changePage = (e,value) => {
    setPage(value);
    scrollTo({top: 0})
  }

  return (
    <>
      <LayoutPage shoppingCart>
        <main className="container-models">
          <h2 className="container-models_title">Models</h2>
          <Searcher />
          <Filter />
          <div className="separador" />
          <ProductsListPost posts = {posts} />
          <Stack flexDirection={'row'} justifyContent={'center'} sx={{ mt: 3, mb: 3, width: 1 }}>
            <Pagination
              page= {page}
              onChange={changePage}
              size= {isSmallDevice ? "small":"large"}
              sx={{ 
                '& .MuiPaginationItem-root':{
                  fontSize: '1.7rem'
                }
              }}
              count={totalPages}
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
