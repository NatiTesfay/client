import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { getGuitar } from "../../../services/products/guitar";
import CardComponent from "../../featurs/card.component/CardComponent";
import "./products.css";

const GuitarProduct = () => {
  const [guitar, setGuitar] = useState([]);
  useEffect(() => {
    getGuitar().then((res) => setGuitar(res?.massage));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {
          guitar.map((obj, index) => {
            return (
              <Grid item key={index}>
                <CardComponent obj={obj} key={index} />
              </Grid>
            );
          }) 
        }
      </Grid>
    </Box>
  );
};

export default GuitarProduct;
