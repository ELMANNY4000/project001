import Image from "next/image"
import { FB, Instagram, X, Linkdin, Rensecure} from "../../public/images"

const Footer = () => {
  return (
    <>
        <section className="table-column-wrapper">
        <footer className="table-column">
          <div className="table-divider">
            <div className="table-footer">
              <div className="content1">
                <div className="content2">
                  <Image
                    className="content-item"
                    loading="lazy"
                    alt=""
                    src={Rensecure}
                  />
                </div>
                <div className="resecure">© 2024 Resecure</div>
              </div>
              <div className="our-company-parent">
                <b className="our-company">Our company</b>
                <div className="about-us">About us</div>
                <div className="faq">FAQ</div>
              </div>
              <div className="contact-us-parent">
                <b className="contact-us">Contact us</b>
                <div className="connect-with-us-on-social-medi-parent">
                  <div className="connect-with-us">
                    Connect with us on social media
                  </div>
                  <div className="data-aggregator">
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
      </section>
    </>
  )
}

export default Footer