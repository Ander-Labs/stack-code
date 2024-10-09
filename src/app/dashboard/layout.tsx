import dynamic from "next/dynamic";

const HeaderDashboard = dynamic(
  () => import("@/components/pages/dashboard/headerDashboard")
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderDashboard>{children}</HeaderDashboard>
    </>
  );
}
