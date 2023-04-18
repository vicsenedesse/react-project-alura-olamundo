import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from './pages/Home'
import Post from "pages/Post";
import NotFound from "pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage/>}>
          <Route index element={<Home />}/>
          <Route path="about-me" element={<AboutMe />}/>
        </Route>
        <Route path="posts/:id" element={<Post />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      
      <Footer></Footer>
    </BrowserRouter>
  );
}
