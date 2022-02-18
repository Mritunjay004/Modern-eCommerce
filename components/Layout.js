import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
