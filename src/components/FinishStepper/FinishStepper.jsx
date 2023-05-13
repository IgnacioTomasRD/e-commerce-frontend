import { Box, Button, Stack, Typography } from "@mui/material";
import { LinkToTop } from "../../utils/LinkToTop";

function FinishStepper() {
  return (
    <Stack>
      <Typography textAlign={"center"} variant="h2">
        All steps completed - you can log now
      </Typography>
      <Box sx={{ margin: "auto", width: 0.5 }}>
        <LinkToTop to="/login">
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: 1,
              marginTop: "10px",
              fontSize: "1rem",
            }}
          >
            Log in
          </Button>
        </LinkToTop>
      </Box>
    </Stack>
  );
}

export default FinishStepper;
