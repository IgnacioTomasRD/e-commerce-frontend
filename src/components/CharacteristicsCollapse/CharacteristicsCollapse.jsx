import { Collapse, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function CharacteristicsCollapse({ characteristics }) {
  const [isCharacteristicsOpen, setCharacteristicsOpen] = useState(false);

  return (
    <>
      <Stack
        sx={{ backgroundColor: "transparent", border: 0 }}
        component={"button"}
        direction={"row"}
        alignItems={"center"}
        onClick={() => setCharacteristicsOpen(!isCharacteristicsOpen)}
      >
        <Typography variant="h5">Characteristics</Typography>
        {isCharacteristicsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Stack>
      <Collapse in={isCharacteristicsOpen}>
        <Container sx={{ margin: "auto" }}>
          {characteristics?.map((characteristic, index) => {
            return (
              <Grid container width={1} textAlign={"center"} key = {index}>
                <Grid
                  item
                  xs
                  sx={
                    characteristics.length-1=== index
                      ? {
                          borderRight: "1px solid gray",
                        }
                      : {
                          borderRight: "1px solid gray",
                          borderBottom: "1px solid gray",
                        }
                  }
                >
                  <Typography variant="h6">{characteristic.name}</Typography>
                </Grid>
                <Grid
                  item
                  xs
                  sx={
                    index === characteristics.length-1
                      ? null
                      : { borderBottom: "1px solid gray" }
                  }
                >
                  <Typography variant="h6">{characteristic.value}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </Container>
      </Collapse>
    </>
  );
}

export default CharacteristicsCollapse;
