import type { ReactNode } from 'react';
import { AppShell } from './AppShell';

type DashboardLayoutProps = {
  persona: 'volunteer' | 'admin';
  title: string;
  subtitle?: string;
  children: ReactNode;
  hideShellHeader?: boolean;
};

export function DashboardLayout({ persona, title, subtitle, children, hideShellHeader }: DashboardLayoutProps) {
  return (
    <AppShell role={persona} title={title} subtitle={subtitle} hideShellHeader={hideShellHeader}>
      {children}
    </AppShell>
  );
}
