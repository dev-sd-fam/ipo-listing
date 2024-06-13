import { Link } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";
import "./navbar.scss";

const Navbar = () => {
  return (
    <section className="navbar">
      <Wrapper>
        <h1 className="logo">
          <Link to="/" title="Home">IPO</Link>
        </h1>
      </Wrapper>
    </section>
  );
};

export default Navbar;
