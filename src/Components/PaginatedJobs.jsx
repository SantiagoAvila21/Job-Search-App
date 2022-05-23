import { useState, useEffect, useContext } from 'react'
import Jobs from './Jobs';
import ReactPaginate from "react-paginate";
import { jobsContext } from '../Context/JobsContext';

const PaginatedJobs = ({ jobsPerPage }) => {

    const { jobs } = useContext(jobsContext);
    const [currentJobs, setCurrentJobs] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [jobOffset, setJobOffset] = useState(0);


    useEffect(() => {
        const endOffset = jobOffset + jobsPerPage;
        setCurrentJobs(jobs.slice(jobOffset, endOffset));
        setPageCount(Math.ceil(jobs.length / jobsPerPage));
    },[jobOffset, jobsPerPage, jobs]);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * jobsPerPage) % jobs.length;
        setJobOffset(newOffset);
    }

    return (
        <>
            {currentJobs && <Jobs jobs = {currentJobs} />}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
            />
        </>
    );
}

export default PaginatedJobs;