import { Stack } from "@mui/material"; //Divider
import Box from "@mui/material/Box";

const MuiLayout = () => {
  // 1 => 8px
  //height={"100vh"}
  return (
    <>
      {/* Use to handle layout in one Diminution  flex flex-col is the default  */}
      <Stack
        sx={{
          padding: "20px",
          height:"100vh",
          justifyContent:"center",
          alignItems:"center"
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
    </>
  );
};

export default MuiLayout;
