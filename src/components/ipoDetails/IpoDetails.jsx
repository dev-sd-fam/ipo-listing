import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import "./ipoDetails.scss";

const IpoDetails = ({ ipoDetail }) => {
  const getBracketValueColorClass = (percent) => {
    if (percent) {
      const percentage = parseFloat(percent);
      return percentage < 0 ? "red-text" : "green-text";
    }
    return "";
  };
  return (
    <section className="ipo-details">
      <Wrapper>
        <div className="container">
          <SectionHeading>IPO details</SectionHeading>

          <ul className="content">
            {ipoDetail.ipoDetails?.map((detail) => (
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
    </section>
  );
};

export default IpoDetails;
