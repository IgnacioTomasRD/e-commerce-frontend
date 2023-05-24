import { Button, CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blue } from "@mui/material/colors";

const ButtonLoader = (props) => {
  const { loading, success, title,height, propsToButton } = props;

  return (
    <Button {...propsToButton}>
      {" "}
      {success ? (
        <CheckCircleIcon sx={{ height }} fontSize="large" />
      ) : (
        <>{title}</>
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
};

export default ButtonLoader;
