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
    <Fade>
      <Container className="min-h-screen">
        <title>My Contributions</title>
        <h2 className="text-4xl font-bold my-8 px-2">
          My <span className="text-primary">Contributions</span> (
          {myContribution?.length})
        </h2>
        <Table myContribution={myContribution}></Table>
      </Container>
    </Fade>
  );
};

export default MyContribution;
