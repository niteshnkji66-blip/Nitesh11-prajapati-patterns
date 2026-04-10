import { Skeleton } from "@/components/ui/skeleton";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const PatternLibrary = lazy(() => import("./pages/PatternLibrary"));
const PatternDetail = lazy(() => import("./pages/PatternDetail"));

function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {(["a", "b", "c", "d", "e", "f"] as const).map((id) => (
          <Skeleton key={`skel-${id}`} className="h-48 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageSkeleton />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

import { Outlet } from "@tanstack/react-router";

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const patternsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/patterns",
  component: PatternLibrary,
});

const patternDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/patterns/$patternId",
  component: PatternDetail,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  patternsRoute,
  patternDetailRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
