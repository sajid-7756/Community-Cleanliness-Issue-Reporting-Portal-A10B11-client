import { Link } from "react-router";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";

const VolunteerCTA = () => {
  return (
    <section className="bg-base-200 py-12 px-6 md:px-12 rounded-xl shadow-lg text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon + Heading */}
        <div className="flex justify-center mb-4">
          <FaHandsHelping className="text-primary text-5xl" />
        </div>
        <h2 className="text-3xl font-bold text-base-content mb-4">
          Join Our <span className="text-primary">Clean Drive</span>
        </h2>

        {/* Description */}
        <p className="text-base-content/80 mb-6">
          Be part of a community that cares. Together we can keep our streets,
          parks, and neighborhoods clean and green. Sign up as a volunteer and
          make a real impact today.
        </p>

        {/* CTA Button */}
        <Link
          to="/volunteer-signup"
          className="btn btn-primary btn-lg text-primary-content hover:bg-primary-focus"
        >
          <FaLeaf className="mr-2" />
          Become a Volunteer
        </Link>
      </div>
    </section>
  );
};

export default VolunteerCTA;
