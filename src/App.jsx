import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import ScrollToTop from "./components/common/ScrollToTop";
import BlogList from "./components/sections/blog/BlogList";
import BlogDetail from "./pages/BlogDetail";
import { DataProvider } from "./context/DataContext";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
        {/* We keep Footer global, but maybe tricky if dashboard covers it. 
            Often dashboards have no footer or internal footer. 
            User didn't specify, I'll update logic in Footer or DashboardLayout if needed. 
            For now, Footer appears below everything, which is fine. */}
        <Footer />
        <ScrollToTop />
      </Router>
    </DataProvider>
  );
}

export default App;
