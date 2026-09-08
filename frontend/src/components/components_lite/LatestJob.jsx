import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const LatestJob = () => {
  const allJobs = useSelector((store) => store.job?.allJobs || []);

  return (
    <div className="max-w-7xl mx-auto my-20 text-center">
      <h2 className="text-3xl font-semibold font-sans">
        <span className="text-[#318ce7]">Latest & Top </span>Jobs Opening
      </h2>

      <div className="grid grid-cols-3 gap-5 my-5">
        {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
                <JobCards key={job._id} job={job}></JobCards>
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              ),
            )
        )}
      </div>
    </div>
  );
};

export default LatestJob;
