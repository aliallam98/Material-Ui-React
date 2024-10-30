import Box from "@mui/material/Box";

const MuiLayout = () => {
  // 1 => 8px
  //height={"100vh"}
  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.light",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
        }}
        component="section"
      >
        This Box renders as an HTML section element.
      </Box>
    </>
  );
};

export default MuiLayout;
