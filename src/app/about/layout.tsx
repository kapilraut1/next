import About from "../../../components/About";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <About />
      {children}
    </>
  );
}
