import BannerSlider from "../Components/BannerSlider";
import IssueCategories from "../Components/IssueCategories";
import CommunityStats from "../Components/CommunityStats";
import VolunteerCTA from "../Components/VolunteerCTA";
import RecentComplaints from "../Components/RecentComplaints";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Newsletter from "../Components/Newsletter";
import Partners from "../Components/Partners";
import HowItWorks from "../Components/HowItWorks";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <title>Clean Hub - Home</title>
      <Fade triggerOnce cascade damping={0.1}>
        <BannerSlider />
        <Partners />
        <HowItWorks />
        <IssueCategories />
        <Features />
        <RecentComplaints />
        <CommunityStats />
        <Testimonials />
        <FAQ />
        <VolunteerCTA />
        <Newsletter />
      </Fade>
    </div>
  );
};


export default Home;
