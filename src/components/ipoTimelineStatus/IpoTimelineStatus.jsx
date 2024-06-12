import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import "./ipoTimelineStatus.scss";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const IpoTimelineStatus = ({ ipoDetail }) => {
  let previousStatus = true;
  let lastActiveIndex = -1;

  return (
    <section className="timeline">
      <Wrapper>
        <div className="container">
          <SectionHeading>IPO Timeline</SectionHeading>
          <ul className="timeline-status">
            {ipoDetail.ipoTimeline?.map((timeline, index) => {
              if (!previousStatus) {
                timeline.status = false;
              }
              previousStatus = timeline.status;

              if (timeline.status) {
                lastActiveIndex = index;
              }

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
                    {index < ipoDetail.ipoTimeline.length - 1 && (
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
      {lastActiveIndex >= 0 && (
        <style>
          {`.timeline-item.active:nth-child(${lastActiveIndex + 1})::after {
            border-color: #e8e8e8 !important;
          }`}
        </style>
      )}
    </section>
  );
};

export default IpoTimelineStatus;
