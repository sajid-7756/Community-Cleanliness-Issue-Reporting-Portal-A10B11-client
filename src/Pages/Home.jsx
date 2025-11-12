import BannerSlider from "../Components/BannerSlider";
import IssueCategories from "../Components/IssueCategories";
import CommunityStats from "../Components/CommunityStats";
import VolunteerCTA from "../Components/VolunteerCTA";
import RecentComplaints from "../Components/RecentComplaints";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="space-y-15">
      <title>Clean Hub - Home</title>
      <Fade triggerOnce cascade damping={0.2}>
        <BannerSlider></BannerSlider>
        <IssueCategories></IssueCategories>
        <RecentComplaints></RecentComplaints>
        <CommunityStats></CommunityStats>
        <VolunteerCTA></VolunteerCTA>
      </Fade>
    </div>
  );
};

export default Home;
