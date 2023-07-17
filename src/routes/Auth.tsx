import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Auth/Login";

export function AuthRoutes() {

  return (
    <Routes>
      <Route index Component={LoginPage} />
    </Routes>
  );
}
