import Image from "next/image"
import { FB, Instagram, X, Linkdin, logo2} from "../../public/images"

const Footer = () => {
  return (
      <footer className=" bg-black">
        <div className="container pt-5">
          <div className="row pt-5 pb-4 d-md-flex  justify-content-between">
            <div className="col-12 col-md d-flex flex-column justify-content-between">
                <Image
                  className="content-item"
                  loading="lazy"
                  alt=""
                  src={logo2}
                />
              <div className="footer-text text-white">© 2024 FraudCovr</div>
            </div>
            <div className="col-12 col-md my-5 my-md-0 d-flex flex-column align-items-md-center text-white">
              <div >
                <b className="footer-head">Our company</b>
                <div className="footer-text">About us</div>
                <div className="footer-text">FAQ</div>
              </div>
            </div>
            <div className="col-12 col-md d-flex flex-column align-items-md-end text-white">
                <div className="">
                  <b className="footer-head">Contact us</b>
                  <div className="footer-text">
                    Connect with us on social media
                  </div>
                  <div className="d-flex justify-content-between col-7 col-md-12">
                    <Image
                      className="camera-instagram-social-media-icon"
                      loading="lazy"
                      alt=""
                      src={Instagram}
                    />

                    <Image
                      className="twitter-icon-1"
                      loading="lazy"
                      alt=""
                      src={X}
                    />

                    <Image
                      className="exclude-icon"
                      loading="lazy"
                      alt=""
                      src={Linkdin}
                    />

                    <Image
                      className="fb-facebook-facebook-logo-icon"
                      loading="lazy"
                      alt=""
                      src={FB}
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer