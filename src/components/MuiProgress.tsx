import { Box, CircularProgress, LinearProgress, Stack } from "@mui/material";

const MuiProgress = () => {
  return (
    <Box
      component={"section"}
      sx={{
        bgcolor: "black",
        height: "100vh",
      }}
    >
      <Stack gap={10} py={20} px={10}>
        <Stack direction={"row"} gap={10}>
          <CircularProgress />
          <CircularProgress disableShrink />
        </Stack>
        <Stack gap={10} direction={"row"}>
          <CircularProgress color="success" />
          <CircularProgress color="secondary" />
          <CircularProgress color="error" />
        </Stack>
        <Stack gap={10} direction={"row"} alignItems={"center"}>
          <CircularProgress color="success" size={20} />
          <CircularProgress color="secondary" size={40} />
          <CircularProgress color="error" size={60} />
        </Stack>
        <Stack gap={10} direction={"row"} alignItems={"center"}>
          <CircularProgress
            variant="determinate"
            color="success"
            size={60}
            value={60}
          />
          {/* will not works till change  variant to determinate and then use value */}
          <CircularProgress variant="indeterminate" size={40} value={60} />
        </Stack>
        <Stack gap={10}>
            {/* color -  variant then add value  */}
          <Box sx={{ width: "50% " }}>
            <LinearProgress />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiProgress;
