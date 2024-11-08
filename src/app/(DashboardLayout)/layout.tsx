import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextMart | Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      side bar
      {children}
    </div>
  );
}
