import { Link } from "react-router";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";
import Container from "./Container";
import { Typewriter } from "react-simple-typewriter";

const VolunteerCTA = () => {
  return (
    <Container className="p-8 md:px-12 rounded-2xl mb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            {/* Icon + Heading */}
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaHandsHelping className="text-primary text-4xl" />
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-base-content leading-tight">
              Join Our{" "}
              <span className="text-primary">
                <Typewriter words={["Clean Drive"]} loop={true}></Typewriter>
              </span>
            </h2>

            {/* Description */}
            <p className="text-base-content/70 text-lg leading-relaxed">
              Be part of a community that cares. Together we can keep our
              streets, parks, and neighborhoods clean and green. Sign up as a
              volunteer and make a real impact today.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/register"
                className="btn btn-primary btn-lg text-primary-content hover:bg-primary-focus hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <FaLeaf className="mr-2" />
                Become a Volunteer
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
                alt="Volunteers cleaning community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VolunteerCTA;
