import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import {
  FaTrash,
  FaHardHat,
  FaTools,
  FaRoad,
  FaArrowLeft,
} from "react-icons/fa";
import Container from "../Components/Container";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../Components/Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";

import { MapPin, Calendar, DollarSign, ArrowLeft, Target, Users, MessageSquare, Phone, Home, CheckCircle2 } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const IssueDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios();
  const [contricbutions, setContricbutions] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handlePayUpContribution = (e) => {
    e.preventDefault();
    const additionalInfo = e.target.additionalInfo.value;
    const address = e.target.address.value;
    const phoneNumber = e.target.number.value;
    const amount = e.target.amount.value;
    const date = e.target.date.value;

    const newContribution = {
      issueId: data._id,
      amount,
      phone: phoneNumber,
      address,
      date,
      additionalInfo: additionalInfo,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      category: data?.category,
      title: data?.title,
    };

    axiosSecure.post("/contributions", newContribution).then((data) => {
      if (data.data.insertedId) {
        toast.success("Contribution Successful! Community thanks you.");
        setShowModal(false);
        setRefetch((prev) => !prev);
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/contributions/${data?._id}`).then((data) => {
      setContricbutions(data.data);
      setLoading(false);
    });
  }, [axiosInstance, data?._id, refetch]);

  const decContribution = [...contricbutions].sort((a, b) => b.amount - a.amount);

  if (loading) return <Loading />;

  return (
    <div className="bg-base-200/30 min-h-screen pb-20">
      <title>{data.title} | Details</title>
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-transparent"></div>
        
        <Container className="absolute inset-0 flex flex-col justify-end pb-12">
            <button 
                onClick={() => navigate(-1)}
                className="btn btn-circle bg-white/20 backdrop-blur-md border-none text-white hover:bg-white/40 mb-8"
            >
                <ArrowLeft size={24} />
            </button>
            <div className="max-w-4xl">
                <div className="flex flex-wrap gap-4 mb-6">
                    <span className="badge badge-lg py-5 px-6 rounded-2xl bg-primary border-none text-white font-black text-xs uppercase tracking-widest shadow-xl">
                        {data.category}
                    </span>
                    <span className={`badge badge-lg py-5 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xs uppercase tracking-widest ${data.status === 'ongoing' ? 'text-warning' : 'text-success'}`}>
                        {data.status}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                    {data.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80 font-bold text-lg">
                    <div className="flex items-center gap-2">
                        <MapPin size={24} className="text-primary" />
                        {data.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={24} className="text-primary" />
                        {new Date(data.date).toLocaleDateString(undefined, { dateStyle: 'long' })}
                    </div>
                </div>
            </div>
        </Container>
      </div>

      <Container className="-mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-base-100 rounded-[3rem] p-8 md:p-12 border border-base-200 shadow-sm">
                    <h2 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                        <Target className="text-primary" size={28} />
                        Report Overview
                    </h2>
                    <p className="text-lg text-secondary/60 leading-relaxed font-medium">
                        {data.description}
                    </p>
                </div>

                {/* Contributors List */}
                <div className="bg-base-100 rounded-[3rem] p-8 md:p-12 border border-base-200 shadow-sm">
                    <h2 className="text-2xl font-black text-secondary mb-8 flex items-center gap-3">
                        <Users className="text-primary" size={28} />
                        Active Contributors 
                        <span className="text-primary/30 ml-2">({decContribution.length})</span>
                    </h2>
                    
                    {decContribution.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 opacity-40">
                            <MessageSquare size={48} className="mb-4" />
                            <p className="font-bold text-lg italic">Be the first one to contribute!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {decContribution.map((contribution, index) => (
                                <div key={contribution._id} className="flex items-center justify-between p-6 bg-base-200/30 rounded-3xl border border-transparent hover:border-primary/20 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xl font-black text-secondary/10 w-8">{index + 1}</span>
                                        <div className="avatar">
                                            <div className="w-14 h-14 rounded-2xl ring-4 ring-base-100 ring-offset-2 overflow-hidden bg-base-200">
                                                <img 
                                                    src={contribution.image || "https://i.ibb.co/CpHdF8h2/icons8-user.gif"} 
                                                    alt={contribution.name} 
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-black text-secondary text-lg group-hover:text-primary transition-colors">{contribution.name}</div>
                                            <div className="text-xs font-bold text-secondary/40 uppercase tracking-widest">{new Date(contribution.date).toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-black text-primary">
                                        ${contribution.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: CTA & Summary */}
            <div className="space-y-8">
                <div className="bg-primary rounded-[3rem] p-8 md:p-10 text-white shadow-2xl shadow-primary/20 flex flex-col sticky top-24">
                    <div className="flex items-center justify-between mb-8">
                        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md">
                            <DollarSign size={32} />
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-black uppercase tracking-widest opacity-60">Estimated Budget</div>
                            <div className="text-4xl font-black">${data.amount}</div>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-black mb-4">Make an Impact</h3>
                    <p className="text-white/70 font-bold text-sm leading-relaxed mb-8">
                        Support this cleanup operation by providing resources or financial assistance. Every contribution brings us closer to a cleaner neighborhood.
                    </p>
                    
                    <button 
                        onClick={() => setShowModal(true)}
                        className="btn btn-lg bg-secondary border-none text-white rounded-2xl hover:bg-secondary-focus shadow-xl font-black transition-all hover:scale-105 active:scale-95"
                    >
                        Pledge Support
                    </button>
                    
                    <div className="mt-8 flex items-center gap-3 pt-8 border-t border-white/10 opacity-60">
                         <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center p-0.5">
                            <div className="w-full h-full bg-primary rounded-full"></div>
                         </div>
                         <span className="text-xs font-black uppercase tracking-widest italic">Official Community Issue</span>
                    </div>
                </div>
            </div>
        </div>
      </Container>

      {/* Contribution Modal */}
      {showModal && (
        <div className="modal modal-open backdrop-blur-md">
          <div className="modal-box w-full max-w-2xl bg-base-100 rounded-[3rem] p-0 overflow-hidden border border-base-200 shadow-2xl">
            <div className="bg-secondary p-8 md:p-12 text-white relative">
                 <button 
                  onClick={() => setShowModal(false)} 
                  className="btn btn-circle btn-sm btn-ghost absolute right-6 top-6 hover:bg-white/10"
                >✕</button>
                <h2 className="text-4xl font-black mb-2">Support Report</h2>
                <p className="text-white/60 font-bold uppercase tracking-[0.2em] text-xs">Pledge your contribution to "{data.title}"</p>
            </div>

            <form onSubmit={handlePayUpContribution} className="p-8 md:p-12 space-y-8 text-secondary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control md:col-span-2">
                    <label className="label"><span className="label-text font-black text-secondary/40 text-xs uppercase tracking-widest">Report Title</span></label>
                    <input type="text" name="title" defaultValue={data?.title} readOnly className="input input-ghost font-black text-2xl p-0 focus:bg-transparent cursor-default border-none" />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Your Pledge Amount ($)</span></label>
                    <div className="relative">
                        <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                        <input type="number" name="amount" defaultValue={data?.amount} className="input input-lg w-full pl-14 rounded-2xl bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-black text-xl" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold">Contact Number</span></label>
                    <div className="relative">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
                        <input type="tel" name="number" placeholder="01XXX-XXXXXX" className="input input-lg w-full pl-14 rounded-2xl bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-bold" required />
                    </div>
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label"><span className="label-text font-bold">Pick-up Address / Location</span></label>
                    <div className="relative">
                        <Home className="absolute left-6 top-6 text-primary/40" size={20} />
                        <textarea name="address" placeholder="Where should the materials be picked up from?" className="textarea textarea-lg w-full pl-14 rounded-2xl bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium min-h-[100px]" required></textarea>
                    </div>
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label"><span className="label-text font-bold">Additional Notes</span></label>
                    <textarea name="additionalInfo" placeholder="Any special instructions for the cleanup crew?" className="textarea textarea-lg w-full rounded-2xl bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium min-h-[100px]"></textarea>
                </div>

                <div className="hidden">
                    <input type="text" name="date" defaultValue={new Date().toLocaleDateString()} readOnly />
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 font-black tracking-tight group">
                    Confirm Contribution
                    <CheckCircle2 size={24} className="ml-2 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueDetails;
