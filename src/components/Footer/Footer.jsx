import './Footer.css'
import logo from "/logo.png"
import facebook from "/img/facebook.svg"
import twitter from "/img/twitter.svg"
import instagram from "/img/instagram.svg"
import youtube from "/img/youtube.svg"

const Footer = () => {

  return (
    <footer className="text-white" style={{ backgroundColor: '#13131D' }}>
      <div className="py-5">
        <div className="row">
          <div className="col pt-5 pe-5 pb-2">
            <div className="d-flex justify-content-center">
              <img className='alternative-logo px-5 py-1' src={logo} alt="logo gac-store" />
            </div>
            <div className="d-flex justify-content-center gap-3 pt-4 pb-5">
              <div className="grey-circle">
                <img src={facebook} alt="Facebook" />
              </div>
              <div className="grey-circle">
                <img src={twitter} alt="Twitter" />
              </div>
              <div className="grey-circle">
                <img src={instagram} alt="Instagram" />
              </div>
              <div className="grey-circle">
                <img src={youtube} alt="Youtube" />
              </div>
            </div>
          </div>

          <div className="col pt-5">
            <h4 className="ps-5">SHORT LINKS</h4>
            <section className="ps-5 fw-light">
              <li>Home</li>
              <li>Services</li>
              <li>Screenshots</li>
              <li>Contact</li>
            </section>
          </div>

          <div className="col pt-5">
            <h4 className="ps-5">HELP LINK</h4>
            <section className="ps-5 fw-light">
              <li className="">How to dowload</li>
              <li className="">How it work</li>
              <li className="">Video tutorial</li>
              <li className="">FAQ</li>
            </section>
          </div>

          <div className="col pt-5">
            <h4 className="ps-5">SHORT LINKS</h4>
            <section className="ps-5 fw-light">
              <li className="">Google Play Store</li>
              <li className="">Apple App Store</li>
              <li className="">Download Directly</li>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
