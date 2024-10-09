
import dynamic from "next/dynamic";

const HeaderBody=dynamic(()=>import ('./headerBody'))

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <HeaderBody/>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          {children}
        </div>
      </main>
    </>
  );
}