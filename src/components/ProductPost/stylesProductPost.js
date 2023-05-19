const styleCardContent = {
  width: { xs: "100%", sm: "0.4" },
  height: { xs: 100, sm: "auto" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styleCard = {
  maxHeight: { xs: "400px", sm: "300px" },
  height: "auto",
  position: "relative",
};

const styleCrossIcon = {
  fontSize: "20px",
  position: "absolute",
  right: "0px",
  top: "0px",
  margin: "5px",
};

const propsTypography = {
  gutterBottom: true,
  variant: "h4",
  component: "div",
  sx: { margin: 0 },
  textAlign: "center",
};

const styleMediaCard = {
  width: { xs: "100%", sm: "0.6" },
  maxHeight: { xs: "300px", sm: "auto" },
};

export { styleCardContent, styleCard, styleCrossIcon, propsTypography,styleMediaCard };
