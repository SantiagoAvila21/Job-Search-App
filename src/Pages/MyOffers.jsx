import PaginatedJobs from "../Components/PaginatedJobs";
import { useContext, useEffect, useState } from 'react'
import { postWithToken } from "../api";
import '../Styles/applications.css'
import { jobsContext } from "../Context/JobsContext";

const MyOffers = () => {

    const {setJobs, jobs } = useContext(jobsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        postWithToken('/api/jobs/employer')
        .then(({data}) => {
            setLoading(false);
            setJobs(data);
        })
        .catch(err => {
            console.log(err);
        });
    },[]);

    return (
        <div className="Applications">
                {loading ? (
                    <p>LOADING ...</p>
                ) : (
                    <>
                        {jobs.error ? (
                            <h5 id="noJob"> You have no Published any offer</h5>
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

export default MyOffers;