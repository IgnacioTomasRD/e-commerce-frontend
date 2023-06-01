import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "../../components/SliderPost/SliderPost";
import "./PagePost.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useEffect, useState } from "react";
import LayoutPage from "../../utils/LayoutPage";
import {
  styleButtonShoppingCart,
  styleContainer,
  styleNameProduct,
} from "./StylesPost";
import DescriptionCollapse from "../../components/DescriptionCollapse/DescriptionCollapse";
import CharacteristicsCollapse from "../../components/CharacteristicsCollapse/CharacteristicsCollapse";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../api";
import { addPost } from "../../reducer/shoppingCartSlice";
import { blue } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";


const postDefault = {
  id: "",
  product: {
    name: "",
    description: "",
    category: "T",
    characteristics: [],
    imgs: [],
  },
  description: "",
  price: 0,
  stock: 0,
  state: "",
};

const ButtonShoppingCart = ({ onClick, loading, success }) => (
  <Button
    disabled={loading}
    sx={styleButtonShoppingCart}
    variant="outlined"
    onClick={onClick}
  >
    {" "}
    {success ? (
      <CheckCircleIcon sx={{ height: "56px" }} fontSize="large" />
    ) : (
      "ADD TO SHOPPING CART"
    )}
    {loading && (
      <CircularProgress
        size={24}
        sx={{
          color: blue[500],
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-12px",
          marginLeft: "-12px",
        }}
      />
    )}
  </Button>
);

const ButtonBuyNow = () => (
  <Button
    sx={{ width: "30%", color: "#0057FF", borderColor: "#0057FF" }}
    variant="outlined"
  >
    BUY NOW
  </Button>
);

function PagePost() {
  const [units, setUnits] = useState(1);
  const [post, setPost] = useState(postDefault);
  const params = useParams();
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    const id = params.id;
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex >= 0) {
      setPost(posts[postIndex]);
    } else {
      const getPostById = async () => {
        const post = await fetchPost(id);
        setPost(post);
      };
      getPostById();
    }
  }, []);

  const plusUnit = () =>
    setUnits((prevState) =>
      prevState === post?.stock ? post?.stock : prevState + 1
    );
  const minusUnit = () =>
    setUnits((prevState) => (prevState > 1 ? prevState - 1 : 1));

  const addToShoppingCart = async () => {
    setLoading(true);
    dispatch(addPost({ post, units }));
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  const Name = () => (
    <Typography variant="h4" sx={styleNameProduct}>
      {" "}
      {post.product?.name}{" "}
    </Typography>
  );

  return (
    <>
      <LayoutPage>
        <Container sx={{ maxWidth: "850px !important" }}>
          <Container sx={styleContainer}>
            <Name />
            <ButtonBack />
          </Container>
          <Slider imgs={post.product?.imgs} />
          <Container sx={{ padding: 0, marginTop: 2 }}>
            <Typography variant="h5">Price: {post?.price}USD</Typography>
            <Typography variant="h5">Stock: {post?.stock} units</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="h5">Units: {units}</Typography>
              <Button
                sx={{ margin: 0, padding: 1, minWidth: 0 }}
                onClick={plusUnit}
              >
                <ControlPointIcon sx={{ color: "primary.main" }} />
              </Button>
              <Button
                sx={{ margin: 0, padding: 1, minWidth: 0 }}
                onClick={minusUnit}
              >
                <RemoveCircleOutlineIcon sx={{ color: "primary.main" }} />
              </Button>
            </Stack>
            <Divider></Divider>
            <DescriptionCollapse description={post.product?.description} />
            <Divider />
            <CharacteristicsCollapse
              characteristics={post.product?.characteristics}
            />
            <Stack
              sx={{ marginTop: 2, marginBottom: 5 }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <ButtonShoppingCart
                onClick={addToShoppingCart}
                loading={loading}
                success={success}
              />
              <ButtonBuyNow />
            </Stack>
          </Container>
        </Container>
      </LayoutPage>
    </>
  );
}

export default PagePost;
