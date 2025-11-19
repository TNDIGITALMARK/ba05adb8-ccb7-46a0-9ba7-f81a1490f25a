import { Navigation } from "@/components/lifefocus/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
