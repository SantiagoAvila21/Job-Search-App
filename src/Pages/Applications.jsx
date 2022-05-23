import PaginatedJobs from "../Components/PaginatedJobs";
import { useContext, useEffect, useState } from 'react'
import { postWithToken } from "../api";
import '../Styles/applications.css'
import { jobsContext } from "../Context/JobsContext";

const Applications = () => {

    const {setJobs, jobs } = useContext(jobsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        postWithToken('/api/jobs/me')
        .then(({data}) => {
            setLoading(false);
            setJobs(data);
        })
        .catch(err => {
            console.log(err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(jobs);

    return (
        <div className="Applications">
                {loading ? (
                    <p>LOADING ...</p>
                ) : (
                    <>
                        {(jobs.error || jobs.length === 0) ? (
                            <h5 id="noJob"> You have no Applied to any offer</h5>
                        ) : (
                            <>
                                <PaginatedJobs jobsPerPage={8}></PaginatedJobs>
                            </>
                        )}
                    </>
                )}
        </div>
    );
}

export default Applications;