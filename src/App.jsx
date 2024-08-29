import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Objectives from "./pages/Objectives";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Layout*/}
      <Route path="/" element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />
        {/*Organisation*/}
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/objectives" element={<Objectives />} />
        <Route path="/whoswho" element={<Home />} />
        <Route path="/directory" element={<Home />} />
        <Route path="/regActivities" element={<Home />} />
        <Route path="/specialCamp" element={<Home />} />
        <Route path="/awards" element={<Home />} />
        {/*tenders*/}
        <Route path="/tenders" element={<Home />} />
        {/*suggestions*/}
        <Route path="/suggestion" element={<Home />} />
        {/*Dashboard*/}
        <Route path="/dashboard" element={<Home />} />
        {/*circulars*/}
        <Route path="/circulars" element={<Home />} />
        {/*co-ordinators*/}
        <Route path="/coordinators" element={<Home />} />
        {/*voluntneers*/}
        <Route path="/volunteers" element={<Home />} />
        {/*gallery*/}
        <Route path="/gallery" element={<Home />} />
        {/*news*/}
        <Route path="/news" element={<Home />} />
        {/*contact*/}
        <Route path="/contact" element={<Home />} />
        {/*cms*/}
        <Route path="/cms" element={<Home />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
