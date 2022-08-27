import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function AddTodo() {
  return (
    <Container maxWidth="xl">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: "0.5rem", width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Time" variant="outlined" />
      </Box>
      <Button variant="contained" color="success">
        Add Item
      </Button>
    </Container>
  );
}
