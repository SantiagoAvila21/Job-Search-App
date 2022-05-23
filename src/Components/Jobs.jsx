import '../Styles/jobs.css'
import Job from './Job';

const Jobs = ({ jobs }) => {
    return (
        <div className = "jobsContainer">
            {jobs.map( job => {
                return (
                    <Job key={job._id} job={job} />
                );
            })}
        </div>
    );
}

export default Jobs;