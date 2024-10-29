import { Typography } from "@mui/material";

const MuiTypography = () => {
  //gutterBottom => To add Margin bottom
  //align  => Default 'inherit' justify - left = right
  return (
    <section className="py-20 h-screen">
      <div className="container flex flex-col justify-center items-center">
        <Typography color="primary" gutterBottom variant="h1">
          h1
        </Typography>
        <Typography color="secondary" variant="h2">
          h2
        </Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography align="left" variant="body1">
          body1 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Incidunt, error.
        </Typography>
        <Typography variant="body2">
          body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
          dolorum?
        </Typography>
      </div>
    </section>
  );
};

export default MuiTypography;
