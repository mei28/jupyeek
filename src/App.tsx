import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Viewer } from "./pages/Viewer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Box } from "@yamada-ui/react";

export const App = () => {
  return (
    <Router>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewer" element={<Viewer />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;

