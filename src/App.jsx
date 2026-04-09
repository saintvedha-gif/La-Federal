import { useEffect, useContext } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import FloatingCart from "./components/FloatingCart";
import { CartContext, CartProvider } from "./contexts/CartContext";
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

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="route-transition">
      <Routes location={location}>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const cartMethods = useContext(CartContext);
  const isMenuRoute = location.pathname === "/menu" || location.pathname.startsWith("/menu/");

  return (
    <>
      <AnimatedRoutes />
      
      {isMenuRoute && (
        <FloatingCart
          cart={cartMethods.cart}
          onAdd={cartMethods.addToCart}
          onRemove={cartMethods.removeFromCart}
          onDelete={cartMethods.deleteFromCart}
          onClear={cartMethods.clearCart}
          onUpdateAdditions={cartMethods.updateItemAdditions}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </CartProvider>
  );
}
