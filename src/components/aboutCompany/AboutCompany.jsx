import React from "react";
import Wrapper from "../wrapper/Wrapper";
import RenderHTML from "../../utils/renderHtml/RenderHTML";
import "./aboutCompany.scss";
import SectionHeading from "../../utils/SectionHeading";

const AboutCompany = ({ ipoDetail }) => {
  const { aboutCompany } = ipoDetail;
  return (
    <section className="about-company">
      <Wrapper>
        <div className="container">
          <SectionHeading>About the company</SectionHeading>
          {aboutCompany ? <RenderHTML html={aboutCompany} /> : <p>No information available.</p>}
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutCompany;
