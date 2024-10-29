import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

const MuiButtons = () => {
  const [isLoading] = useState(true);
  // disableElevation => To remove shadow effect
  // startIcon => add icon to starting
  // endIcon => add icon to ending
//   color="secondary"
//   onClick={handleClick}
//   loading={loading}
//   loadingPosition="start"
//   startIcon={<SaveIcon />}
//   variant="contained"
  return (
    <section className="py-20 h-screen">
      <div className="container flex flex-col justify-center items-center gap-6">
        <div>
          <Button variant="contained">contained</Button>
          <Button variant="text">text</Button>
          <Button variant="outlined">outlined</Button>
        </div>
        <div>
          <Button>Default is text</Button>
          <Button href="#">Link</Button>
          <Button disabled>disabled</Button>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Default is text
          </Button>
          <Button variant="contained" color="secondary">
            Default is text
          </Button>
          <Button variant="contained" color="success">
            Default is text
          </Button>
          <Button variant="contained" color="error">
            Default is text
          </Button>
          <Button variant="contained" color="info">
            Default is text
          </Button>
          <Button variant="contained" color="warning">
            Default is text
          </Button>
        </div>
        <div>
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </div>
        <div>
          <Button variant="contained" startIcon={<DeleteIcon />}>
            Icon Start
          </Button>
          <Button variant="outlined" endIcon={<SendIcon />}>
            Icon End
          </Button>
        </div>
        <div>
          <IconButton color="secondary" aria-label="Delete">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add to cart">
            <AddShoppingCartIcon />
          </IconButton>
        </div>
        <div>
          <LoadingButton
            loading={isLoading}
            //   loadingPosition="end"
            // loadingIndicator={"Loading"}
            variant="contained"
            // size="medium"
          >
            Submit
          </LoadingButton>
        </div>
      </div>
    </section>
  );
};

export default MuiButtons;
