import React from "react";
import Wrapper from "../wrapper/Wrapper";
import RenderHTML from "../../utils/renderHtml/RenderHTML";
import "./aboutCompany.scss";
import SectionHeading from "../../utils/SectionHeading";
import { motion } from "framer-motion";

const AboutCompany = ({ ipoDetail }) => {
  const { aboutCompany } = ipoDetail;
  return (
    <motion.section
      className="about-company box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ amount: "all", once: true }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Wrapper>
        <div className="container">
          <SectionHeading>About the company</SectionHeading>
          {aboutCompany ? (
            <RenderHTML html={aboutCompany} />
          ) : (
            <p>No information available.</p>
          )}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default AboutCompany;
