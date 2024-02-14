import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import TodoPage from "./pages/todo";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
