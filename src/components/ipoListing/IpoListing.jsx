import React from "react";
import { ipoData } from "../../data";
import Wrapper from "../wrapper/Wrapper";
import "./ipoLising.scss";
import IpoItem from "../ipoItem/IpoItem";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const IpoListing = () => {
  const titles = [
    "Company / Issue date",
    "Issue size",
    "Price range",
    "Min invest/qty",
  ];
  return (
    <section className="ipo-listing">
      <Wrapper>
        <h2 className="sec-heading">IPO - Initial Public Offerings</h2>
        <motion.ul
          className="listing container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <li className="table-titles items">
            {titles.map((title) => (
              <div className="row" key={title}>
                <h4>{title}</h4>
              </div>
            ))}
          </li>
          {ipoData?.map((item) => (
            <IpoItem key={item.slug} {...item} variants={item} />
          ))}
        </motion.ul>
      </Wrapper>
    </section>
  );
};

export default IpoListing;
