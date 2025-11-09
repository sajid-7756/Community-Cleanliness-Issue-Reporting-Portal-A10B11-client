import React from "react";
import BannerSlider from "../Components/BannerSlider";
import IssueCategories from "../Components/IssueCategories";
import LatestIssues from "../Components/LatestIssues";

const Home = () => {
  return (
    <div className="space-y-15">
      <BannerSlider></BannerSlider>
      <IssueCategories></IssueCategories>
      <LatestIssues></LatestIssues>
    </div>
  );
};

export default Home;
