import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/404";
import CheckOutPage from "./pages/CheckOutPage";
import ProductProvider from "./context/productContext";
import CardProvider from "./context/CardContext";
function App() {
  return (
    <>
      <CardProvider>
        <ProductProvider>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailsPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </ProductProvider>
      </CardProvider>
    </>
  );
}

export default App;
