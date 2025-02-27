import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const IpoItem = memo(
  ({
    slug,
    img,
    companyName,
    issueDate,
    issueSize,
    priceRange,
    minInvest,
    qty,
  }) => (
    <motion.li className="item" variants={item}>
      <Link to={`./ipo/${slug}`} className="items" title="Ipo Item">
        <div className="row company flex-align">
          <div className="logo left">
            <img src={img} alt={`${companyName} logo`} />
          </div>
          <div className="right">
            <h3 className="company-name text">{companyName}</h3>
            <div className="date">{issueDate}</div>
          </div>
        </div>
        <div className="row center issue-size">
          <span className="text">{issueSize}</span>
        </div>
        <div className="row center price-range">
          <span className="text">{priceRange}</span>
        </div>
        <div className="row center investment flex-align">
          <span className="min-investment text">{minInvest}</span>
          <span className="qty">{qty}</span>
        </div>
      </Link>
    </motion.li>
  )
);

export default IpoItem;
