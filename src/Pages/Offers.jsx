import React, { useState, useEffect, useContext } from 'react';
import Search from '../Components/Search';
import '../Styles/offers.css';
import { getWithToken } from '../api/index';
import PaginatedJobs from '../Components/PaginatedJobs';
import { jobsContext } from '../Context/JobsContext';

const Offers = () => {

    const [searchValue, setSearchValue] = useState("");
    const [loading, setLoading] = useState(true);

    const {jobs, setJobs} = useContext(jobsContext);
    const [allJobs, setAllJobs] = useState([]);

    const handleChangeSearch = (event) => setSearchValue(event.target.value);
    
    useEffect(() => {
        getWithToken('/api/jobs')
        .then(({data}) => {
            setLoading(false);
            setJobs(data);
            setAllJobs(data);
        })
        .catch(err => {
            console.error(err)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    useEffect(() => {
        setJobs(filteredJobs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchValue]);
    
    const filteredJobs = allJobs.filter(job =>  job.title.toLowerCase().includes(searchValue.toLowerCase()));


    return (
        <div className="offers">
            <Search handleChange = {handleChangeSearch} searchValue={searchValue} />
            {loading ? (
                <div className="loadingContainer">
                    <div className="lds-dual-ring"></div>
                </div>
            ) : (
                <>
                    {jobs.error ? (
                        <h5 id="noJob"> No jobs have been published </h5>
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

export default Offers;