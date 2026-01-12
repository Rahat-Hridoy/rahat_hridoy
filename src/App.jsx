import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/layout/Main";
import ScrollToTop from "./components/common/ScrollToTop";
import BlogList from "./components/sections/blog/BlogList";
import BlogDetail from "./pages/BlogDetail";
import { DataProvider } from "./context/DataContext";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Login from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes with Header & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Route>

          {/* Standalone Login Route - No Header/Footer */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes - Own Layout */}
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
