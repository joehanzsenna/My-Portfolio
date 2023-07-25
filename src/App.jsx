import { Box } from "@chakra-ui/react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomeIndex from "./Pages/Home/HomeIndex/HomeIndex";
import BaseLayout from "./Components/Layouts/BaseLayout";
import AboutIndex from "./Pages/About/AboutIndex/AboutIndex";
import ServicesIndex from "./Pages/Services/ServicesIndex/ServicesIndex";
// import StyledLayout from "./Components/Layouts/StyledLayout/StyledLayout";

function App() {
  return (
    <BrowserRouter>
    <BaseLayout>
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="about" element={<AboutIndex />} />
        <Route path="services" element={<ServicesIndex />} />
        {/* <Route path="styled" element={<StyledLayout />} /> */}
      </Routes>

    </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
