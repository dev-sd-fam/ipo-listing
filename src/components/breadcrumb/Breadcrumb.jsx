import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./breadcrumb.scss";

const Breadcrumb = ({ipoDetail}) => {

  return (
    <div className="breadcrumb">
      <Wrapper>
        <div className="container flex-align">
          <Link to="/" title="Home">Home</Link>
          <span className="icon">
            <MdKeyboardArrowRight />
          </span>
          <span>{ipoDetail?.organisation}</span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Breadcrumb;
