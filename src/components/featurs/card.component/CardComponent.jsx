import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CardComponent = ({ obj }) => {
  const { guitarName, guitarPrize, guitarType, isAvailable, url } = obj;
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 500, margin: 1 }}>
      <CardHeader title={guitarName} />
      <CardMedia component="img" height="200" image={url} alt="guitar" />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          justifyContent="center"
          alignContent="center"
          display="flex"
        >
          Type: {guitarType}
          <br />
          Is Available: {isAvailable}
          <br />
          Price: {guitarPrize}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
