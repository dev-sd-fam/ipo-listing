import React from "react";
import { ipoData } from "../../data";
import Wrapper from "../wrapper/Wrapper";
import "./ipoLising.scss";
import IpoItem from "../ipoItem/IpoItem";

const IpoListing = () => {
  return (
    <section className="ipo-listing">
      <Wrapper>
        <h2 className="sec-heading">IPO - Initial Public Offerings</h2>
        <ul className="listing">
          <li className="table-titles items">
            <div className="row">
              <h4>Company / Issue date</h4>
            </div>
            <div className="row center">
              <h4>Issue size</h4>
            </div>
            <div className="row center">
              <h4>Price range</h4>
            </div>
            <div className="row center">
              <h4>Min invest/qty</h4>
            </div>
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
