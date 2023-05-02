import {
  FacebookOutlined,
  LocationOnOutlined,
  MailOutline,
  PhoneCallback,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <hr style={{ color: "gray", opacity: "0.5", marginTop: "30px" }} />
      <div className="footer-container">
        <div className="social-media">
          <p className="footer-logo">Shop Zone</p>
          <ul className="footer-lists">
            <li className="listItem">
              <FacebookOutlined style={{ color: "#4267B2" }} />
              Facebook
            </li>
            <li className="listItem">
              <YouTube style={{ color: "#FF0000" }} />
              Youtube
            </li>
            <li className="listItem">
              <Telegram style={{ color: "#0088cc" }} />
              Telegram
            </li>
            <li className="listItem">
              <Twitter style={{ color: "#1DA1F2" }} />
              Twitter
            </li>
          </ul>
        </div>
        <div className="policies">
          <p className="footer-title">CONSUMER POLICIES</p>
          <ul className="footer-lists">
            <li className="listItem">Return policy</li>
            <li className="listItem">Terms of use</li>
            <li className="listItem">Security</li>
            <li className="listItem">Privacy</li>
            <li className="listItem">Sitemap</li>
            <li className="listItem">EPR Compliance</li>
          </ul>
        </div>
        <div className="helpline">
          <p className="footer-title">HELP</p>
          <ul className="footer-lists">
            <li className="listItem">Payments</li>
            <li className="listItem">Shipping</li>
            <li className="listItem">Cancelation and return</li>
            <li className="listItem">FAQ</li>
            <li className="listItem">Other Queries</li>
          </ul>
        </div>
        <div className="contact-info">
          <p className="footer-title">CONTACT</p>
          <ul className="footer-lists">
            <li className="listItem">
              <MailOutline style={{ marginRight: "5px" }} />
              Email : contact-us@shopzone.com
            </li>
            <li className="listItem">
              <PhoneCallback style={{ marginRight: "5px" }} />
              Ph-no : +91-9876543210
            </li>
            <li className="listItem">
              <LocationOnOutlined style={{ marginRight: "5px" }} />
              Location : North veli street,
              <br />
              Kaarapakkam
              <br />
              Chennai-6000012
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
