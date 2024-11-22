import "./App.css";
import "@xyflow/react/dist/style.css";
import Overview from "./pages/Overview";
import { Navigate, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
function App() {
  return (
    <Routes>
      <Route
        path="/overview"
        element={<Overview />}
      />
      <Route index element={<Navigate to="/overview" replace />} />
      <Route path="/details/*" element={<Details />} />
    </Routes>
  );
}

export default App;
