import { Stack } from "@mui/material"; //Divider
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const MuiLayout = () => {
  // 1 => 8px
  //height={"100vh"}
  return (
    <>
      {/* Use to handle layout in one Diminution  flex flex-col is the default  */}
      <Stack
        sx={{
          padding: "20px",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction={"row"}
        spacing={2}
        // divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            bgcolor: "secondary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            width: "250px",
            color: "white",
            padding: "16px",
          }}
        >
          This Box renders as an HTML section element.
        </Box>
        <Box
          sx={{
            bgcolor: "secondary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            width: "250px",
            color: "white",
            padding: "16px",
          }}
        >
          This Box renders as an HTML section element.
        </Box>
        <Box
          sx={{
            bgcolor: "secondary.light",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "250px",
            width: "250px",
            color: "white",
            padding: "16px",
          }}
        >
          This Box renders as an HTML section element.
        </Box>
      </Stack>
      <Grid
        sx={{
          bgcolor: "black",
          color: "white",
          p: 2,
        }}
        container
        rowSpacing={2}
        columnSpacing={4}
        // columns={{
        //   xs: 2,
        // }}
      >
        <Grid
          sx={{
            border: 1,
            p: 1,
          }}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          testing grid 1
        </Grid>
        <Grid
          sx={{
            border: 1,
            p: 1,
          }}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          testing grid 2
        </Grid>
        <Grid
          sx={{
            border: 1,
            p: 1,
          }}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          testing grid 3
        </Grid>
        <Grid
          sx={{
            border: 1,
            p: 1,
          }}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          testing grid 4
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
