import { Link } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";
import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <Wrapper>
        <div className="footer-container">
          <h2 className="logo">
            <Link to="./">IPO</Link>
          </h2>
          <span>&copy; Copyright of IPO's</span>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
