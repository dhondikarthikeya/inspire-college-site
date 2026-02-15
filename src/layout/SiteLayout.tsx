import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh",overflow: "visible", }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}