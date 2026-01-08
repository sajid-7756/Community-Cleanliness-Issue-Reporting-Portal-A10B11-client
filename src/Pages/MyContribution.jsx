import { useContext, useEffect, useState } from "react";
import Container from "../Components/Container";
import { AuthContext } from "../Provider/AuthContext";
import Table from "../Components/Table";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading";
import { Fade } from "react-awesome-reveal";

const MyContribution = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [myContribution, setmyContribution] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/contributions/?email=${user?.email}`).then((data) => {
      setmyContribution(data.data);
      setLoading(false);
    });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <Fade triggerOnce>
      <div className="space-y-8 animate-fade-in">
        <title>My Contributions</title>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h1 className="text-4xl font-black text-secondary tracking-tight">
                    My Contributions <span className="text-primary/40 ml-2">({myContribution?.length})</span>
                </h1>
                <p className="text-base-content/60 mt-2 font-medium">Review your historical impact and community support data.</p>
            </div>
        </div>

        {/* Table Card */}
        <div className="bg-base-100 rounded-[3rem] border border-base-200 shadow-sm p-8 min-h-[400px]">
            <Table myContribution={myContribution}></Table>
        </div>
      </div>
    </Fade>
  );

};

export default MyContribution;
