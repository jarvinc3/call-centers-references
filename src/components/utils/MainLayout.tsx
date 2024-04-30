import Navbar from "./Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto p-4 max-w-screen-xl flex flex-col sm:gap-10 gap-2">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
