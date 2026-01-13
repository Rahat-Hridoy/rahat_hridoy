import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import { DataProvider } from "./context/DataContext";
import MainLayout from "./components/layout/MainLayout";

// Loading Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-sectionBG">
    <div className="w-16 h-16 border-4 border-brand-1 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy Loaded Components
const Home = lazy(() => import("./pages/Home/Home").then(module => ({ default: module.Main })));
const BlogList = lazy(() => import("./pages/Blog/BlogList"));
const BlogDetail = lazy(() => import("./pages/Blog/BlogDetail"));
const Login = lazy(() => import("./pages/Auth/Login"));
const DashboardLayout = lazy(() => import("./pages/Dashboard/DashboardLayout"));

function App() {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes with Header & Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </Route>

            {/* Standalone Login Route - No Header/Footer */}
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes - Own Layout */}

            <Route path="/dashboard/*" element={<DashboardLayout />} />

          </Routes>
        </Suspense>
      </Router>
    </DataProvider>
  );
}

export default App;
