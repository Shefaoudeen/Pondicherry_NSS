import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import AboutUs from "./pages/AboutUs";
import Objectives from "./pages/Objectives";
import WhosWho from "./pages/WhosWho";
import Directory from "./pages/Directory";
import SpecialCamp from "./pages/SpecialCamp";
import Coordinators from "./pages/Coordinators";
import Volunteers from "./pages/Volunteers";
import Circular from "./pages/Circular";
import NewsLetters from "./pages/NewsLetters";
import Contact from "./pages/Contact";
import RegularActivities from "./pages/RegularActivities";
import Awards from "./pages/Awards";

import Suggestion from "./pages/Suggestion";
import Regular from "./pages/Regular";
import Special from "./pages/Special";
import Award from "./pages/Award";

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
          <Route path="/whoswho" element={<WhosWho />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/regActivities" element={<Regular />} />
          <Route path="/specialCamp" element={<Special />} />
          <Route path="/awards" element={<Award />} />
          {/*tenders*/}

          {/*suggestions*/}
          <Route path="/suggestion" element={<Suggestion />} />
          {/*circulars*/}
          <Route path="/circulars" element={<Circular />} />
          {/*co-ordinators*/}
          <Route path="/coordinators" element={<Coordinators />} />
          {/*voluntneers*/}
          <Route path="/volunteers" element={<Volunteers />} />
          {/*gallery*/}
          <Route path="/gallery" element={<Home />} />
          {/*news*/}
          <Route path="/news" element={<NewsLetters />} />
          {/*contact*/}
          <Route path="/contact" element={<Contact />} />
          {/*cms*/}
          <Route path="/cms" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
