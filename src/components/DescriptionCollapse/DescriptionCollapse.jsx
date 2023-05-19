import { Collapse, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function DescriptionCollapse({description}) {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  return (
    <>
      <Stack
        sx={{ backgroundColor: "transparent", border: 0 }}
        direction={"row"}
        alignItems={"center"}
        component={"button"}
        onClick={() => setDescriptionOpen(!isDescriptionOpen)}
      >
        <Typography variant="h5">Description</Typography>
        {isDescriptionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Stack>
      <Collapse in={isDescriptionOpen}>
        <Container>
          <Typography variant="h6">{description}</Typography>
        </Container>
      </Collapse>
    </>
  );
}

export default DescriptionCollapse;
