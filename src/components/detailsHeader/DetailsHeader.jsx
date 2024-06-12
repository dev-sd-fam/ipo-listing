import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./detailsHeader.scss";

const DetailsHeader = ({ ipoDetail }) => {
  return (
    <section className="detail-header">
      <Wrapper>
        <div className="container flex">
          <div className="left-side flex">
            <Link to="/" className="back-btn flex">
              <MdKeyboardArrowLeft />
            </Link>
            <div className="content flex">
              <img
                src={ipoDetail.img}
                alt={ipoDetail.companyName}
                className="logo"
              />
              <div className="content-right">
                <h3 className="title">{ipoDetail.companyName}</h3>
                <span className="organization">{ipoDetail.organisation}</span>
              </div>
            </div>
          </div>
          <div className="right-side flex">
            <Link to="" className="download">
              <LiaFileDownloadSolid />
            </Link>
            <Link className="apply-now">Apply Now</Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default DetailsHeader;
