import React from "react";
import BannerSlider from "../Components/BannerSlider";
import IssueCategories from "../Components/IssueCategories";
import LatestIssues from "../Components/LatestIssues";
import CommunityStats from "../Components/CommunityStats";

const Home = () => {
  return (
    <div className="space-y-15">
      <BannerSlider></BannerSlider>
      <IssueCategories></IssueCategories>
      <LatestIssues></LatestIssues>
      <CommunityStats></CommunityStats>
    </div>
  );
};

export default Home;
