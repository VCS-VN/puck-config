import RenderPage from "@/pages/render";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/render")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RenderPage />;
}
