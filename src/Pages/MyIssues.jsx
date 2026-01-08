import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useRef } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../Components/Loading";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import { PlusCircle } from "lucide-react";

const MyIssues = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [myIssues, setMyIssues] = useState([]);
  const [selectedIssue, setselectedIssue] = useState([]);
  const issueModalRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const issueId = selectedIssue?._id;

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/myIssue/?email=${user?.email}`)
        .then((res) => {
          setMyIssues(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [axiosSecure, user]);

  const handleUpdateIssue = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;
    const description = e.target.description.value;
    const status = e.target.status.value;

    const updatedIssue = {
      title,
      category,
      amount,
      description,
      status,
      issueId,
    };

    axiosSecure
      .patch(`/issues/${issueId}`, updatedIssue)
      .then((res) => {
        if (res.data.modifiedCount) {
          setMyIssues((prevIssues) =>
            prevIssues.map((issue) =>
              issue._id === issueId ? { ...issue, ...updatedIssue } : issue
            )
          );
          toast.success("Issue Update Sucess");
          issueModalRef.current.close();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteIssue = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "oklch(52% 0.18 150)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/issues/${id}`).then(() => {
          const filteredIssues = myIssues.filter((e) => e._id !== id);
          setMyIssues(filteredIssues);

          Swal.fire({
            title: "Deleted!",
            text: "Your Issue has been deleted.",
            icon: "success",
            confirmButtonColor: "oklch(52% 0.18 150)",
          });
        });
      }
    });
  };

  const reversed = [...myIssues].reverse();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <Fade triggerOnce>
      <div className="space-y-8 animate-fade-in">
        <title>My Issues</title>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h1 className="text-4xl font-black text-secondary tracking-tight">
                    My Issues <span className="text-primary/40 ml-2">({myIssues?.length})</span>
                </h1>
                <p className="text-base-content/60 mt-2 font-medium">Track and manage the reports you've submitted.</p>
            </div>
            <Link to="/dashboard/add-issue" className="btn btn-primary rounded-2xl shadow-lg shadow-primary/20 gap-2">
                <PlusCircle size={20} />
                Report New Issue
            </Link>
        </div>

        {/* Table Card */}
        <div className="bg-base-100 rounded-[3rem] border border-base-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table table-lg">
              <thead>
                <tr className="bg-base-200/30 border-b border-base-200">
                  <th className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 py-6 pl-8">#</th>
                  <th className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 py-6">Issue Details</th>
                  <th className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 py-6">Category</th>
                  <th className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 py-6 text-right px-8">Budget & Status</th>
                  <th className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40 py-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reversed.map((issue, index) => (
                  <tr key={issue._id} className="hover:bg-base-200/30 transition-colors border-b border-base-200/50">
                    <td className="pl-8 font-black text-base-content/20">{index + 1}</td>

                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-14 h-14 ring-4 ring-base-200 ring-offset-2 overflow-hidden bg-base-200">
                            <img
                              src={issue.image || "https://i.ibb.co/CpHdF8h2/icons8-user.gif"}
                              alt={issue.title}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="max-w-[250px]">
                          <div className="font-black text-secondary truncate">{issue.title}</div>
                          <div className="text-xs font-bold text-base-content/40 flex items-center gap-1 mt-1 transition-all">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                            {issue.location}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="badge badge-lg bg-secondary/5 text-secondary border-secondary/10 font-bold px-4 py-4 rounded-xl">
                        {issue.category}
                      </span>
                    </td>

                    <td className="text-right px-8">
                        <div className="font-black text-xl text-secondary">${issue.amount}</div>
                        <div className={`badge badge-sm font-black border-none px-3 uppercase tracking-widest mt-2 ${
                            issue.status?.toLowerCase() === "ongoing" 
                            ? "bg-warning/10 text-warning" 
                            : "bg-success/10 text-success"
                        }`}>
                            {issue.status}
                        </div>
                    </td>

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => {
                            setselectedIssue(issue);
                            issueModalRef.current.showModal();
                          }}
                          className="btn btn-square btn-ghost hover:bg-primary/10 text-primary transition-all rounded-xl"
                          title="Update Issue"
                        >
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                           </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteIssue(issue._id)}
                          className="btn btn-square btn-ghost hover:bg-error/10 text-error transition-all rounded-xl"
                          title="Delete Issue"
                        >
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                           </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <dialog
          ref={issueModalRef}
          className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
        >
          <div className="modal-box bg-base-100 rounded-[3rem] p-0 overflow-hidden border border-base-300 shadow-2xl max-w-2xl">
            <div className="bg-linear-to-r from-primary to-secondary p-8 text-white relative">
                 <button 
                  onClick={() => issueModalRef.current.close()} 
                  className="btn btn-circle btn-sm btn-ghost absolute right-4 top-4 hover:bg-white/10"
                >✕</button>
                <h2 className="text-3xl font-black mb-1">Update Report</h2>
                <p className="text-xs font-bold uppercase tracking-widest opacity-70">Editing ID: {selectedIssue?._id?.slice(-8)}</p>
            </div>
            
            <form onSubmit={handleUpdateIssue} className="p-8 md:p-12 space-y-6 text-secondary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control md:col-span-2">
                    <label className="label"><span className="label-text font-bold text-secondary/60">Issue Title</span></label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={selectedIssue.title}
                        className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-bold"
                        required
                    />
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-secondary/60">Category</span></label>
                    <select name="category" defaultValue={selectedIssue.category} className="select select-bordered select-lg w-full rounded-2xl focus:select-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-bold">
                        <option>Garbage</option>
                        <option>Illegal Construction</option>
                        <option>Broken Public Property</option>
                        <option>Road Damage</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label"><span className="label-text font-bold text-secondary/60">Budget ($)</span></label>
                    <input
                        type="number"
                        name="amount"
                        defaultValue={selectedIssue.amount}
                        className="input input-bordered input-lg w-full rounded-2xl focus:input-primary bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-bold"
                        required
                    />
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label"><span className="label-text font-bold text-secondary/60">Description</span></label>
                    <textarea
                        name="description"
                        defaultValue={selectedIssue.description}
                        className="textarea textarea-bordered textarea-lg w-full rounded-2xl focus:textarea-primary min-h-[120px] bg-base-200/50 border-transparent focus:bg-base-100 transition-all font-medium"
                        required
                    ></textarea>
                </div>

                <div className="form-control md:col-span-2">
                    <label className="label font-bold text-secondary/60">Progress Status</label>
                    <div className="flex gap-4">
                        <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${selectedIssue.status === 'ongoing' ? 'bg-primary/10 border-primary text-primary' : 'bg-base-200/50 border-transparent'}`}>
                            <input type="radio" name="status" value="ongoing" defaultChecked={selectedIssue.status === 'ongoing'} className="radio radio-primary" />
                            <span className="font-bold">Ongoing</span>
                        </label>
                        <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${selectedIssue.status === 'ended' ? 'bg-success/10 border-success text-success' : 'bg-base-200/50 border-transparent'}`}>
                            <input type="radio" name="status" value="ended" defaultChecked={selectedIssue.status === 'ended'} className="radio radio-success" />
                            <span className="font-bold">Ended</span>
                        </label>
                    </div>
                </div>
              </div>

              <div className="pt-6">
                <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 font-black tracking-tight">
                    Update Issue Report
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </Fade>
  );

};

export default MyIssues;
