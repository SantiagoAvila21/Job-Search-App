import { useContext, useEffect, useState } from 'react';
import { authContext } from '../Context/AuthContext';
import '../Styles/job.css'
import { putWithToken } from '../api/index';
import { ToastContainer, toast } from 'react-toastify';
import { jobsContext } from '../Context/JobsContext';

const Job = ({job}) => {
    const context = useContext(authContext);
    const { jobs,setJobs } = useContext(jobsContext);
    const [applied, setApplied] = useState(false);

    const UnApplicantChange = (id) => {
        const filteredApplicant = jobs.filter(job => job._id !== id);
        setJobs(filteredApplicant);
    }

    const ApplyToJob = () => {
        putWithToken(`/api/jobs/apply/${job._id}`)
        .then(({data}) => {
            toast.success(`You've Applied in ${data.title}`,{
                autoClose: 1500,
                pauseOnHover: false
            });
            setApplied(true);
        }).catch(err => console.log(err));
    }

    const UnApplyToJob = () => {
        putWithToken(`/api/jobs/unapply/${job._id}`)
        .then(({data}) => {
            toast.warn(`You've Unapplied Succesfully of ${data.title}`,{
                autoClose: 1500,
                pauseOnHover: false
            });
            setApplied(false);
            UnApplicantChange(data._id)
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        const {applicants} = job;
        if(!Array.isArray(applicants)){
            setApplied(true);
            return;
        }
        if(applicants.some(applicant => applicant.id === context.auth.id)) setApplied(true);
    },[]);

    return (
        <div className="jobContainer">
            <ToastContainer position='top-center'></ToastContainer>
            <div className="leftSideJob">
                <h3 id="jobTitle">{job.title}</h3>
                <p>{job._id} +++++++ </p>
                <p id="jobDesc">{job.description}</p>
                <h5 id="jobEmployer"><i className="fa-solid fa-address-card"></i>{" Employer: "+job.employer.name}</h5>
                <h4 id="jobSalary">{`Salary: $ ${job.salary}`}</h4>
                <div className='categoriesContainer'>
                    <h4>Categories: </h4>
                    {job.category.map((cate,index) => {
                        return <p id="jobCategory" key={index + job._id}>{cate}</p>
                    })}
                </div>
            </div>
            <div className='rightSideJob'>
                {applied && (
                    <>
                        <h3 className="applied">You've already applied</h3>
                        <button id="UnApplyBtn" onClick={UnApplyToJob}> Unapply </button>
                </>)}
                {context.auth.role === "applicant" && !applied && <button id="ApplyBtn" onClick={ApplyToJob}> Apply </button>}
            </div>
        </div>
    );
}

export default Job;