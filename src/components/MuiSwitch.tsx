import { Box, FormControlLabel, Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";

const MuiSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  console.log({ isChecked });
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        labelPlacement="start"
        control={<Switch checked={isChecked} onChange={onChangeHandler} />}
      />
    </Box>
  );
};

export default MuiSwitch;
