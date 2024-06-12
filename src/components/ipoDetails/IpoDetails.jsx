import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import "./ipoDetails.scss";

const IpoDetails = ({ ipoDetail }) => {
  return (
    <section className="ipo-details">
      <Wrapper>
        <div className="container">
          <SectionHeading>IPO details</SectionHeading>

          <ul className="content">
            {ipoDetail.ipoDetails?.map((detail) => (
              <li className="row" key={detail.title}>
                <h4 className="title">{detail.title}</h4>
                <span className="value">{detail.value ? detail.value : "--"}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default IpoDetails;
