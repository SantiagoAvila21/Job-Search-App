import React, { createContext, useState } from "react";

export const jobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  return (
    <jobsContext.Provider value={{ jobs, setJobs }}>
      {children}
    </jobsContext.Provider>
  );
};

export default JobsProvider;