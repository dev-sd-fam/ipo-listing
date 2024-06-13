import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import { motion } from "framer-motion";
import "./ipoDetails.scss";

const IpoDetails = ({ ipoDetail }) => {
  const { ipoDetails } = ipoDetail;
  const getBracketValueColorClass = (percent) => {
    if (percent) {
      const percentage = parseFloat(percent);
      return percentage < 0 ? "red-text" : "green-text";
    }
    return "";
  };
  return (
    <motion.section
      className="ipo-details box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Wrapper>
        <div className="container">
          <SectionHeading>IPO details</SectionHeading>

          <ul className="content">
            {ipoDetails?.map((detail) => (
              <li className="row" key={detail.title}>
                <h4 className="title">{detail.title}</h4>
                <span className="value">
                  {detail.value ? detail.value : "--"}
                  {detail.percent && (
                    <span className={getBracketValueColorClass(detail.percent)}>
                      ({detail.percent})
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default IpoDetails;
