import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
