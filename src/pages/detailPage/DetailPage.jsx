import React from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import IpoDetails from "../../components/ipoDetails/IpoDetails";
import IpoTimelineStatus from "../../components/ipoTimelineStatus/IpoTimelineStatus";
import AboutCompany from "../../components/aboutCompany/AboutCompany";
import { useParams } from "react-router-dom";
import { ipoData } from "../../data";

const DetailPage = () => {
  const { slug } = useParams();
  const ipoDetail = ipoData?.find((ipo) => ipo.slug === slug);

  if (!ipoDetail) {
    return <div>IPO not found</div>;
  }

  return (
    <>
      <Breadcrumb ipoDetail={ipoDetail} />
      <DetailsHeader ipoDetail={ipoDetail} />
      <IpoDetails ipoDetail={ipoDetail} />
      <IpoTimelineStatus ipoDetail={ipoDetail} />
      <AboutCompany ipoDetail={ipoDetail} />
    </>
  );
};

export default DetailPage;
