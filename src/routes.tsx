import { Outlet, RootRoute, Route, Router } from "@tanstack/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ), // TODO: Add a layout component here
});

const indexRoute = new Route({
  path: "/",
  component: () => <h1>Index</h1>,
  getParentRoute: () => rootRoute,
});

const aboutRoute = new Route({
  path: "about",
  component: () => <h1>About</h1>,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
