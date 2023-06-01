import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export const ButtonBack = () => {
const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => navigate(-1)}
      sx={styleButtonBack}
    >
      <ArrowBackIosIcon
        sx={{ color: "white", fontSize: 40, paddingLeft: "11px" }}
      />
    </Button>
  )
}
