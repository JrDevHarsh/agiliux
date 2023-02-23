import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Banner/Header";
import Home from "./pages/Home";
import TermLife from "./pages/TermLife";

function App() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <BrowserRouter>
        <Handle>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/term-life" element={<TermLife />} />
            <Route path="*" element={<div>404-Not Found</div>} />
          </Routes>
        </Handle>
      </BrowserRouter>
    </>
  );
}

function Handle({ children, pageProps }) {
  const location = useLocation();
  let pageTitle = location.pathname
    .replace("/", "")
    .split("-")
    .map((m) => m.slice(0, 1).toUpperCase() + m.slice(1))
    .join(" ");

  document.title =
    pageTitle === "" || pageTitle.length === 0 ? "Home" : pageTitle;

  return <>{children}</>;
}

export default App;
