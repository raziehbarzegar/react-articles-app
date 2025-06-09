import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
