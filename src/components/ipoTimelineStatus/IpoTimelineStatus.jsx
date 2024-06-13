import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import "./ipoTimelineStatus.scss";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const IpoTimelineStatus = ({ ipoDetail }) => {
  const { ipoTimeline } = ipoDetail;
  let previousStatus = true;

  return (
    <section className="timeline">
      <Wrapper>
        <div className="container">
          <SectionHeading>IPO Timeline</SectionHeading>
          <ul className="timeline-status">
            {ipoTimeline?.map((timeline, index) => {
              if (!previousStatus) {
                timeline.status = false;
              }
              previousStatus = timeline.status;

              return (
                <li
                  key={timeline.title}
                  className={`timeline-item ${timeline.status ? "active" : ""}`}
                >
                  <div className="status-container">
                    <div className="status">
                      {timeline.status ? (
                        <FaCheckCircle className="tick-icon green" /> // Green tick for completed status
                      ) : (
                        <FaRegCircle className="tick-icon grey" /> // Grey tick for pending status
                      )}
                    </div>
                    {index < ipoTimeline.length - 1 && (
                      <div
                        className={`line ${timeline.status ? "active" : ""}`}
                      ></div>
                    )}
                  </div>
                  <div className="content">
                    <span className="title">{timeline?.title}</span>
                    <span className="date">{timeline.date}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default IpoTimelineStatus;
