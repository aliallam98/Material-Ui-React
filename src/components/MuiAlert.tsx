import { RampRight } from "@mui/icons-material";
import { Alert, Container, Stack } from "@mui/material";

const MuiAlert = () => {
  // Every component has a default icon if you wanna override the default icon add icon property
  // can use color property to change color - there is a variant and severity as well 
  return (
    <Container>
      <Stack spacing={1}>
        <Stack spacing={1}>
          <Alert severity="success">
            This First Alert success Practising component
          </Alert>
          <Alert severity="error">
            This First Alert error Practising component
          </Alert>
          <Alert severity="info" icon={<RampRight />}>
            This First Alert info Practising component
          </Alert>
          <Alert severity="warning" icon={<RampRight />}>
            This First Alert warning Practising component
          </Alert>
        </Stack>
        <Stack spacing={1}>
          <Alert severity="success" variant="filled">
            This First Alert success Practising component
          </Alert>
          <Alert severity="error" variant="filled">
            This First Alert error Practising component
          </Alert>
          <Alert severity="info" icon={<RampRight />} variant="filled">
            This First Alert info Practising component
          </Alert>
          <Alert severity="warning" icon={<RampRight />} variant="filled">
            This First Alert warning Practising component
          </Alert>
        </Stack>
        <Stack spacing={1}>
          <Alert severity="success" variant="outlined">
            This First Alert success Practising component
          </Alert>
          <Alert severity="error" variant="outlined">
            This First Alert error Practising component
          </Alert>
          <Alert severity="info" icon={<RampRight />} variant="outlined">
            This First Alert info Practising component
          </Alert>
          <Alert severity="warning" icon={<RampRight />} variant="outlined">
            This First Alert warning Practising component
          </Alert>
        </Stack>
        <Stack spacing={1}>
          <Alert severity="success"  color="warning">
            This First Alert success Practising component
          </Alert>
          <Alert severity="error" variant="filled" color="warning">
            This First Alert error Practising component
          </Alert>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MuiAlert;
