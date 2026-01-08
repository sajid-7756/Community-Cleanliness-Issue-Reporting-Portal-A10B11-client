import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaUsers, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Container from "./Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

import { Users, CheckCircle2, Timer, Award } from "lucide-react";

const CommunityStats = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState([]);
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((data) => {
        setStats(data.data);
      })
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/myIssue/?email=${user?.email}`)
        .then((res) => {
          setMyIssues(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [axiosSecure, user]);

  const pendingIssue = myIssues.filter((issue) => issue.status === "ongoing");
  const resolvedIssue = myIssues.filter((issue) => issue.status === "ended");

  const { ref, inView } = useInView({ triggerOnce: true });

  const statCards = [
    {
        label: "Registered Users",
        value: stats?.length || 0,
        icon: Users,
        color: "text-primary",
        bgColor: "bg-primary/10",
        description: "Citizens making a difference"
    },
    {
        label: "Issues Resolved",
        value: resolvedIssue?.length || 0,
        icon: CheckCircle2,
        color: "text-success",
        bgColor: "bg-success/10",
        description: "Successfully cleaned up"
    },
    {
        label: "Active Reports",
        value: pendingIssue?.length || 0,
        icon: Timer,
        color: "text-warning",
        bgColor: "bg-warning/10",
        description: "Awaiting community action"
    }
  ];

  return (
    <div className="bg-secondary py-24 md:py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <Container>
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Global <span className="text-primary italic">Impact</span>
          </h2>
          <p className="text-lg text-white/60 font-medium max-w-2xl leading-relaxed">
            Real-time insights into community efforts. Every number represents a cleaner and safer neighborhood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statCards.map((stat, idx) => (
                <div key={idx} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                        <div className={`p-6 rounded-3xl ${stat.bgColor} ${stat.color} mb-8 transition-transform group-hover:scale-110`}>
                            <stat.icon size={40} />
                        </div>
                        
                        <div ref={ref} className="text-5xl font-black text-white mb-2 tabular-nums">
                            {inView ? (
                                <CountUp end={stat.value} duration={2.5} />
                            ) : (
                                0
                            )}
                        </div>
                        
                        <div className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-4">
                            {stat.label}
                        </div>
                        
                        <p className="text-white/40 font-bold text-xs uppercase tracking-widest">
                            {stat.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* Small Progress Marker */}
        <div className="mt-20 flex flex-col items-center">
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4">
                < Award className="text-primary" size={24} />
                <span className="text-white font-bold text-sm tracking-wide">Cleanest Neighborhood Award: December 2025</span>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunityStats;
