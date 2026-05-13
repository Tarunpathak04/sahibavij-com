import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: { queryClient: undefined! }, // or pass actual queryClient
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
  return router;
};