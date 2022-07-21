import React from "react";

function JobBoardComponent(props) {

    const tags = [props.techjobs.role, props.techjobs.level];

    if (props.techjobs.tools) {
        tags.push(...props.techjobs.tools);
    }

    if (props.techjobs.languages) {
        tags.push(...props.techjobs.languages);
    }


    return (

        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 ${props.techjobs.featured ? "border-l-4 border-blue-500 border-solid" : null} lg:flex-row lg:my-4`}>

            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-blue-500">
                    {props.techjobs.company}
                    {props.techjobs.isNew ? <span className="bg-blue-500 text-blue-100 font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">New!</span> : null}
                    {props.techjobs.featured ? <span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full uppercase text-sm">Featured</span> : null}
                </h3>
                <h2 className="font-bold text-xl my-2">{props.techjobs.position}</h2>
                <p className="text-gray-700">
                    {props.techjobs.postedAt} &middot; {props.techjobs.contract} &middot; {props.techjobs.location}
                </p>
            </div>

            <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 lg:pt-0 lg:mt-0">
                {tags ? (
                    tags.map((tag) =>
                        <span onClick={() => props.handleTagClick(tag)} className="cursor-pointer text-blue-500 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0">{tag}</span>)
                ) : ("")}
            </div>

        </div>

    );
}

export default JobBoardComponent;

// tailwind css cheat sheet
//https://nerdcave.com/tailwind-cheat-sheet
// stopped video at 0:11:28