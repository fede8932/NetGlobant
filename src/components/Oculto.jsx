import React from "react";
import { withWidth, Hidden } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";


const Oculto = (props) => {
  return (
    <>
    <Typography variant="h6" color="initial">
      ANCHO: {props.width}
    </Typography>
    <Hidden smDown>
      <Button color="secondary">
          boton
      </Button>
    </Hidden>
    </>
  );
};

export default withWidth()(Oculto);
