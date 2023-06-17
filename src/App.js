import { Route, Routes } from "react-router-dom";
import Home from "./components/container/Home";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route element={<Dashboard />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;
