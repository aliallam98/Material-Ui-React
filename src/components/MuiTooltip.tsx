import { IconButton, Tooltip, Zoom } from "@mui/material";

const MuiTooltip = () => {
    // followCursor
    // arrow  
    // slots={{ transition:Zoom, }}>
    // placement
    // enterDelay={500} leaveDelay={200}
  return (
    <>
      <Tooltip title="Close" followCursor placement="top">
        <IconButton aria-label="close">X</IconButton>
      </Tooltip>
      <Tooltip title="Close" arrow slots={{
        transition:Zoom,
      }}>
        <IconButton aria-label="close">X</IconButton>
      </Tooltip>
      <Tooltip title="Close" enterDelay={500} leaveDelay={500} arrow slots={{
        transition:Zoom,
      }}>
        <IconButton aria-label="close">X</IconButton>
      </Tooltip>
    </>
  );
};

export default MuiTooltip;
