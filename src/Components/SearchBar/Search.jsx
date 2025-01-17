import React, { useState } from 'react'

function Search(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    })
    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            
            ...prevState,
            [e.target.name]: e.target.value
        }))
        
    }

    const search = async() => {
        
        await props.fetchJobsCustom(jobCriteria);
        
    }

  return (
    <div className='flex gap-4 my-10 justify-center px-10 text-zinc-700'>
        <select onChange = {handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-3 bg-zinc-200 hover:bg-opacity-10 font-semibold rounded-md shadow-md'>
            <option value="" disabled hidden>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Andriod Developer">Andriod Developer</option>
            <option value="FullStack Developer">FullStack Developer</option>
        </select>
        <select onChange = {handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 hover:bg-opacity-10 font-semibold rounded-md shadow-md'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select onChange = {handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 hover:bg-opacity-10 font-semibold rounded-md shadow-md'>
            <option value="" disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select onChange = {handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 hover:bg-opacity-10 font-semibold rounded-md shadow-md'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior level">Junior level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button onClick = {search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md shadow-md hover:bg-blue-600'>Search</button>
    </div>
  )
}

export default Search