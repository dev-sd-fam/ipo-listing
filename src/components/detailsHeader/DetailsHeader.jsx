import React from "react";
import Wrapper from "../wrapper/Wrapper";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./detailsHeader.scss";
import { motion } from "framer-motion";

const DetailsHeader = ({ ipoDetail }) => {
  return (
    <motion.section
      className="detail-header box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Wrapper>
        <div className="container flex">
          <div className="left-side flex">
            <Link to="/" className="back-btn flex" title="Back to home">
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
            <Link
              to="https://pii.or.id/uploads/dummies.pdf"
              className="download"
              title="Download doc"
              download
              target="_blank"
            >
              <LiaFileDownloadSolid />
            </Link>
            <Link to="" className="apply-now" title="Apply now">
              Apply Now
            </Link>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default DetailsHeader;
