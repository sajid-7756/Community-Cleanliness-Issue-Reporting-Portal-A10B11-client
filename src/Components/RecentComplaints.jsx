import { useEffect, useState } from "react";
import {
  FaTrash,
  FaHardHat,
  FaTools,
  FaRoad,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router";
import Container from "./Container";
import Loading from "./Loading";
import { Typewriter } from "react-simple-typewriter";

import { MapPin, ArrowRight, Search } from "lucide-react";

const RecentComplaints = () => {
  const [latestIssues, setlatestIssues] = useState([]);
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/latest-issues")
      .then((res) => {
        setlatestIssues(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  if (loading) return <Loading />;

  return (
    <div className="bg-base-100 py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tight mb-6">
                    Recent <span className="text-primary italic">Reports</span>
                </h2>
                <p className="text-lg text-secondary/60 font-medium leading-relaxed">
                    Stay updated with the latest community reports. Real problems being solved by real people in real-time.
                </p>
            </div>
            <Link to="/issues" className="btn btn-secondary rounded-2xl gap-2 font-bold group">
                Browse All Reports
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestIssues.slice(0, 6).map((issue) => (
            <div
                key={issue._id}
                className="group bg-base-100 rounded-[2.5rem] border border-base-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-base-content/10"></div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-6 right-6">
                        <span className="badge badge-lg py-5 px-6 rounded-2xl bg-white/90 backdrop-blur-md border-none text-secondary font-black text-xs uppercase tracking-widest shadow-xl">
                            {issue.category}
                        </span>
                    </div>

                    {/* Budget Tag */}
                    <div className="absolute bottom-6 left-6">
                        <div className="bg-primary text-white p-3 px-5 rounded-2xl font-black text-xl shadow-2xl">
                            ${issue.amount}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                         <div className={`w-2 h-2 rounded-full ${issue.status === 'ongoing' ? 'bg-warning animate-pulse' : 'bg-success'}`}></div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-secondary/40">{issue.status}</span>
                    </div>
                    
                    <h2 className="text-2xl font-extrabold text-secondary leading-tight mb-4 group-hover:text-primary transition-colors">
                        {issue.title}
                    </h2>

                    <div className="flex items-center gap-2 text-secondary/60 mb-6 font-bold text-sm">
                        <MapPin size={16} className="text-primary" />
                        {issue.location}
                    </div>

                    <div className="mt-auto pt-6 border-t border-base-200 flex items-center justify-between">
                        <div className="text-xs font-bold text-secondary/40 italic">
                            Reported {new Date(issue.date).toLocaleDateString()}
                        </div>
                        <Link
                          to={`/issue-details/${issue._id}`}
                          className="btn btn-primary btn-circle btn-md shadow-lg shadow-primary/20 hover:scale-110 active:scale-95 transition-all"
                        >
                          <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentComplaints;
