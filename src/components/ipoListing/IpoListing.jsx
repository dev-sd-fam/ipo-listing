import React from "react";
import { ipoData } from "../../data";
import Wrapper from "../wrapper/Wrapper";
import "./ipoLising.scss";
import IpoItem from "../ipoItem/IpoItem";

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
        <ul className="listing">
          <li className="table-titles items">
            {titles.map((title) => (
              <div className="row" key={title}>
                <h4>{title}</h4>
              </div>
            ))}
          </li>
          {ipoData?.map((item) => (
            <IpoItem key={item.slug} {...item} />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default IpoListing;
