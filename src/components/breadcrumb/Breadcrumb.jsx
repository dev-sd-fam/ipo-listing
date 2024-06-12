import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./breadcrumb.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Wrapper>
        <div className="container flex-align">
          <Link to="/">Home</Link>
          <span className="icon">
            <MdKeyboardArrowRight />
          </span>
          <span>Market Watch</span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Breadcrumb;
