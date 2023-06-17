import { Route, Routes } from "react-router-dom";
import Home from "./components/container/Home";
import Dashboard from "./components/pages/Dashboard";
import Transactions from "./components/pages/Transactions";
import Categories from "./components/pages/Categories";
import Help from "./components/pages/Help";

function App() {
  return (
    <Routes>
      <Route element={<Home />}>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Transactions />} path="/transactions" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Help />} path="/help" />
      </Route>
    </Routes>
  );
}

export default App;
