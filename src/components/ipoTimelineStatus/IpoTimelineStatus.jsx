import { motion } from "framer-motion";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import SectionHeading from "../../utils/SectionHeading";
import "./ipoTimelineStatus.scss";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const IpoTimelineStatus = ({ ipoDetail }) => {
  const { ipoTimeline } = ipoDetail;
  let previousStatus = true;

  return (
    <motion.section className="timeline box" initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    viewport={{amount: "all"}}
    transition={{
      duration: 0.5,
      delay: 0.6,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
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
    </motion.section>
  );
};

export default IpoTimelineStatus;
