import { Box, Container, Typography } from "@mui/material";

const Login = () => (
  <Box>
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Login;
