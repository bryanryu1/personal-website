import { FieldNotesHome } from "@/components/FieldNotesHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bryan Ryu | Senior Product Manager",
  description: "Bryan Ryu's work across AI voice agents, integrations, MCP, and product strategy.",
};

export default function FieldNotesPage() {
  return <FieldNotesHome />;
}
