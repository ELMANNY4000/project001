import Navbar from "./Navbar/Navbar.js"
import Footer from "./Footer/Footer.js"
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}