import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "~/components/Layout";
import { PATH } from "~/constants/path";
import { DashboardRoutes } from "./Dashboard";
import { AuthRoutes } from "./Auth";

export function AppRoutes() {
  function nested(route: string) {
    return route.endsWith("/") ? route + "*" : `${route}/*`;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index element={<Navigate to={PATH.DASHBOARD} />} />
          <Route path={nested(PATH.DASHBOARD)} Component={DashboardRoutes} />
        </Route>
        <Route path={nested(PATH.LOGIN)} Component={AuthRoutes} />
      </Routes>
    </BrowserRouter>
  );
}
