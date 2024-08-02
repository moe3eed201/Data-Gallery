// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import Gallery from "./Gallery.jsx";
import Detail from "./Detail.jsx";
import NotFound from "./NotFound.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
