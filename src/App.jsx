import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Home*/}
      <Route path="/" element={<Layout />}>
        {/*Organisation*/}
        <Route path="/aboutUs" element={<Home />} />
        <Route path="/objectives" element={<Home />} />
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
