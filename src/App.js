import React, { useEffect, useState } from "react";
import jobData from "./assets/data";
import JobBoardComponent from "./components/JobBoardComponent";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterz, setFilterz] = useState([]);

  useEffect(() => {
    setJobs(jobData);
  }, []);

  // function filterFunc(sometin) {

  //   if (filterz.length === 0) {
  //     return true;
  //   }

  //   const tags = [sometin.role, sometin.level];

  //   if (sometin.tools) {
  //     tags.push(...sometin.tools);
  //   }

  //   if (sometin.languages) {
  //     tags.push(...sometin.languages);
  //   }

  //   return filterz.every(fiilter => tags.includes(fiilter));
  // };

  //OR

  function filterFunc({ role, level, tools, languages }) {

    if (filterz.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    // return tags.some(tag => filterz.includes(tag));
    return filterz.every(fiilter => tags.includes(fiilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  function handleTagClicks(tagz) {
    //avoid readding the tag
    if (filterz.includes(tagz)) return;

    setFilterz([...filterz, tagz]);
  }

  function handleFilterClick(deleteFilter) {
    setFilterz(filterz.filter(f => f !== deleteFilter));
  }

  function clearFilters() {
    setFilterz([]);
  }

  return (
    <>
      <header className="header">
        <h1 className="text-white font-bold text-center text-4xl">Job Board</h1>
      </header>
      <div className="container m-auto">

        {
          filterz.length > 0 ?
            (
              <div className="flex flex-wrap bg-white shadow-md -my-10 mb-16 mx-10 p-6 rounded z-10 relative">
                {filterz.map(filteredTag =>
                  <span onClick={() => handleFilterClick(filteredTag)} className="cursor-pointer text-blue-500 bg-blue-100 font-bold mr-4 p-2 rounded lg:mb-0">
                    x {filteredTag}
                  </span>)
                }

                <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>

              </div>
            ) : null
        }


        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((eachJob) =>
            <JobBoardComponent techjobs={eachJob} key={eachJob.id} handleTagClick={handleTagClicks} />)
        )}
      </div>
    </>
  );
}

export default App;
