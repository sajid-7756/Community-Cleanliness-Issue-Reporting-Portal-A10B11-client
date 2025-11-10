import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { FaUsers, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const CommunityStats = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const [stats, setStats] = useState();
  const [myIssues, setMyIssues] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((data) => {
        // console.log(data.data)
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

  console.log({ pendingIssue, resolvedIssue });
  return (
    <section className="p-6 md:p-10 bg-base-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-base-content">
        Community <span className="text-primary">Stats</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Users */}
        <div className="stat bg-base-200 rounded-lg p-6 flex flex-col items-center">
          <FaUsers className="text-primary text-3xl mb-2" />
          <div className="text-3xl font-bold text-base-content">
            {stats?.length}
          </div>
          <div className="text-sm text-base-content/70">Registered Users</div>
        </div>

        {/* Resolved Issues */}
        <div className="stat bg-base-200 rounded-lg p-6 flex flex-col items-center">
          <FaCheckCircle className="text-success text-3xl mb-2" />
          <div className="text-3xl font-bold text-base-content">
            {user ? resolvedIssue.length : 0}
          </div>
          <div className="text-sm text-base-content/70">Issues Resolved</div>
        </div>

        {/* Pending Issues */}
        <div className="stat bg-base-200 rounded-lg p-6 flex flex-col items-center">
          <FaHourglassHalf className="text-warning text-3xl mb-2" />
          <div className="text-3xl font-bold text-base-content">
            {user ? pendingIssue.length : 0}
          </div>
          <div className="text-sm text-base-content/70">Issues Pending</div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
