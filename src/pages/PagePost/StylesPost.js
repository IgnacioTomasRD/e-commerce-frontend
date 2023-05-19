const styleContainer = {
  display: "flex",
  width: 1,
  justifyContent: "space-between",
  minHeight: "70px",
  marginBottom: "10px",
};

const styleNameProduct = {
  flexGrow: 1,
  maxWidth: "85%",
  alignSelf: "end",
  fontSize: "2rem",
};

const styleButtonBack = {
  width: "40px",
  height: "40px",
  backgroundColor: "#0057FF",
  borderRadius: "50%",
  marginTop: 1.5,
  minWidth: 0,
  "&:hover": {
    backgroundColor: "#0057FF",
  },
  alignSelf: "start",
};

const styleButtonShoppingCart = {
  width: "60%",
  maxWidth: "200px",
  color: "#0057FF",
  borderColor: "#0057FF",
};

export { styleContainer, styleNameProduct, styleButtonBack,styleButtonShoppingCart };
