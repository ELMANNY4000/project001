// import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Logo from '../../public/images/logo.svg'


const Navbar = () => {
  useEffect(()=> {
    if(typeof window !== "undefined"){
      require('bootstrap/dist/js/bootstrap.js')
    }
  }, []);


  return (
    <nav className="navbar navbar-expand-lg position-sticky top-0 z-3 bg-body-tertiary py-4">
      <div className="container">
        <Link href='/' className="navbar-brand">
          <Image src={Logo} alt='Logo'  className='w-auto'/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navtext justify-content-center ms-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <Link href='#works' className="nav-link fw-bold  px-4 "><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">How it works</span></Link>
            </li>
            <li className="nav-item">
              <Link href='#Business' className="nav-link fw-bold  px-4"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">For Business</span></Link>
            </li>
            <li className="nav-item">
              <Link href='#Search' className="nav-link fw-bold  px-4"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">Search</span></Link>
            </li>
            <li className="nav-item">
              <Link href='' className="nav-link fw-bold  px-4"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">FAQ</span></Link>
            </li>
            <Link href='#waitlist' className='text-decoration-none py-2 px-4 rounded text-center text-white contact-btn' ><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"> Contact us</span></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;