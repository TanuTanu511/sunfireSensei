import React from "react";
import JobCards from "./JobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJob = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 text-center">
      <h2 className="text-3xl font-semibold font-sans">
        <span className="text-[#318ce7]">Latest & Top </span>Jobs Opening
      </h2>

      <div className="grid grid-cols-3 gap-5 my-5">
        {randomJobs.slice(0,6).map((Jobs, index) => (
            <JobCards></JobCards>
        ))}
      </div>
    </div>
  );
};

export default LatestJob;
