import { AppSidebar } from "@/components/AppSidebar";
import { getSession } from "@/lib/session";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <AppSidebar userLabel={session ? `${session.tenantName} · ${session.email}` : undefined}>
      {children}
    </AppSidebar>
  );
}
