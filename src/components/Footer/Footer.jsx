import './Footer.css'
import logoAlternativo from "/logo-alternativo.png"
import facebook from "/img/facebook.svg"
import twitter from "/img/twitter.svg"
import instagram from "/img/instagram.svg"
import youtube from "/img/youtube.svg"

const Footer = () => {

  return (
    <footer className="text-white" style={{ backgroundColor: '#192148' }}>
      <div className="">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <img className='alternative-logo bg-white px-5 py-3' src={logoAlternativo} alt="logo gac-store" />
            </div>
            <div className="d-flex justify-content-center gap-2">
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
          <div className="col">
            <h4 className="">SHORT LINKS</h4>
            <section className="fw-light">
              <li>Home</li>
              <li>Services</li>
              <li>Screenshots</li>
              <li>Contact</li>
            </section>
          </div>
          <div className="col">
            <h4 className="">HELP LINK</h4>
            <section className="fw-light">
              <li className="">How to dowload</li>
              <li className="">How it work</li>
              <li className="">Video tutorial</li>
              <li className="">FAQ</li>
            </section>
          </div>
          <div className="col">
            <h4 className="">SHORT LINKS</h4>
            <section className="fw-light">
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

export default Footer;
