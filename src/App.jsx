import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Menu /> },
  { path: "/menu/:categoryId/:productSlug", element: <ProductDetail /> },
  { path: "/nosotros", element: <About /> },
  { path: "/contacto", element: <Contact /> }
];

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
