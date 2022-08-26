import { FC } from "react";
import Container from "@mui/material/Container";
import Navigation from "./components/Navigation";
import Routes from "./routes/Routes";

const App: FC = () => {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Navigation />
      <Routes />
    </Container>
  );
};

export default App;
